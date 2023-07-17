import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

type RegisterParams = {
  email: string;
  password: string;
};

type AuthProps = {
  authState?: {
    token: string | null;
    authenticated: boolean | null;
    isLoading: boolean;
  };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
};

const TOKEN_KEY = 'samcasch_jwt';
const baseUrl = 'https://api.developbetterapps.com';
const AuthContext = createContext<AuthProps>({} as AuthProps);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    isLoading: boolean;
  }>({
    token: null,
    authenticated: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log('token di securestore: ', token);

      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setAuthState({
          token,
          authenticated: true,
          isLoading: false,
        });
      }

      loadToken();
    };
  }, []);

  const register = async (email: string, password: string) => {
    try {
      await axios.post(`${baseUrl}/users`, { email, password });
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${baseUrl}/auth`, { email, password });

      setAuthState({
        token: result.data.token,
        authenticated: true,
        isLoading: false,
      });

      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${result.data.token}`;

      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);

    axios.defaults.headers.common['Authorization'] = '';

    setAuthState({
      token: null,
      authenticated: false,
      isLoading: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

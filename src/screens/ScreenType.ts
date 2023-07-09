import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/NavigationTypes';

/** Screen types */
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

/**  */
export { HomeScreenProps, LoginScreenProps, RegisterScreenProps };

import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import * as SecureStorage from 'expo-secure-store';

const baseURL = 'https://api-samcash.rsib.cloud/api/v1';

export const axiosInstance = axios.create({
  baseURL,
});

interface OriginalRequest extends AxiosRequestConfig {
  _retry?: boolean;
}

// Interceptor to handle token expiration and refresh the token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError): Promise<any> => {
    const originalRequest: OriginalRequest = error.config || {};

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();

        await SecureStorage.setItemAsync(
          process.env.EXPO_PUBLIC_ACCESS_TOKEN_KEY_NAME!,
          newAccessToken
        );
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance.request(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

async function refreshAccessToken() {
  try {
    const refreshToken = await SecureStorage.getItemAsync(
      process.env.EXPO_PUBLIC_REFRESH_TOKEN_KEY_NAME!
    );

    const response = await axios.post(`${baseURL}/customer/refresh`, {
      refreshToken,
    });

    return response.data.token;
  } catch (e) {
    throw new Error('Failed to retrieve access token');
  }
}

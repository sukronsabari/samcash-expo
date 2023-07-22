import React, { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import Loading from './src/components/Loading';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isLoading } = useAuth();

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }

    hideSplashScreen();
  }, []);

  const [fontLoaded] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Extra-Light': require('./src/assets/fonts/Poppins-ExtraLight.ttf'),
  });

  if (isLoading || !fontLoaded) {
    return <Loading />;
  }

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

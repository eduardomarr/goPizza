import React from 'react';

import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular, useFonts } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native';

import { SignIn } from './src/screens/SignIn';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/hooks/useAuth';
import { Product } from './src/screens/Product';

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <AuthProvider>
        {/* <SignIn /> */}
        <Product />
      </AuthProvider>
    </ThemeProvider>
  );
}

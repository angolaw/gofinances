import React from 'react';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import {ThemeProvider} from 'styled-components'
import {useFonts, Poppins_400Regular,Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import theme from './src/global/styles/theme' 
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler'
import { AppRoutes } from './src/routes/app.routes';
import { Authentication } from './src/screens/Authentication';
import {AuthContext} from './src/AuthContext'
export default function App() {
  const [fontsLoaded] = useFonts({Poppins_400Regular,Poppins_500Medium, Poppins_700Bold})
  if(!fontsLoaded)
    return <AppLoading/>
  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AuthContext.Provider value={[]}>
          <Authentication/>
        </AuthContext.Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SplashProvider} from './context/SplashContextProvider';
import MyStack from './navigator/Stack';
import {NavigationContainer} from '@react-navigation/native';
export type RootStackParamList = {
  CategoriesScreen: {titleHeader:string};
  Bottom: undefined;
  CategoryDetails: {title:string};
  Login: undefined;
  Profile: undefined;
  SignUpSelect: undefined;
  SignUpMember: undefined;
  SignUpUser: undefined;
  ResetPassword: undefined;
  Otp: undefined;
  newPassword: undefined
};

function App(): JSX.Element {
  return (
    <SplashProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SplashProvider>
  );
}
export default App;

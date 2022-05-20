import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/auth/AuthNavigator';
import { Provider, useSelector } from 'react-redux';
import store from './src/store/store';
import MainNavigator from './src/navigators/main/MainNavigator';

function App() {
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <NavigationContainer>
      {!isLogin && <AuthNavigator />}
      {isLogin && <MainNavigator />}
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

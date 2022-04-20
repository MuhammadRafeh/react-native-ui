import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignUpScreen from '../../screens/auth/SignUpScreen';
import TermsAndConditionScreen from '../../screens/auth/TermsAndConditionScreen';
import SplashScreen from '../../screens/splash/SplashScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName={'Splash'}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Signup" component={SignUpScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="TermsAndCondition" component={TermsAndConditionScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;

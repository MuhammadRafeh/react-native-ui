import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName={'BottomTab'}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default MainNavigator;

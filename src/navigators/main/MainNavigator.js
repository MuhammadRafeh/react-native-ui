import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import { useSelector } from 'react-redux';
import GenderSelectionScreen from '../../screens/main/genderSelection/GenderSelectionScreen';

const Stack = createStackNavigator();

function MainNavigator() {
    const comingFrom = useSelector(state => state.auth.comingFrom);
    return (
        <Stack.Navigator initialRouteName={comingFrom == 'login' ? 'BottomTab': 'GenderSelection'}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
            <Stack.Screen name="GenderSelection" component={GenderSelectionScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileSwipeScreen from '../../screens/main/bottomtab/home/ProfileSwipeScreen';
import MatchedScreen from '../../screens/main/bottomtab/home/MatchedScreen';

const Stack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Home'}
        >
            <Stack.Screen name="ProfileSwipe" component={ProfileSwipeScreen} />
            <Stack.Screen name="Matched" component={MatchedScreen} />
        </Stack.Navigator>
    );
}

export default HomeStackNavigator;

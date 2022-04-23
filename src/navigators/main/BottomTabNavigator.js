import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/main/HomeScreen';
import SubscriptionScreen from '../../screens/main/SubscriptionScreen';
import MyProfileScreen from '../../screens/main/MyProfileScreen';
import GenderSelectionScreen from '../../screens/main/GenderSelectionScreen';
import TabBar from '../../components/main/bottomtab/TabBar';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15
                }
            }}
            tabBar={TabBar}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Subscription" component={SubscriptionScreen} />
            <Tab.Screen name="My Profile" component={MyProfileScreen} />
            <Tab.Screen name="My Matches" component={GenderSelectionScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;

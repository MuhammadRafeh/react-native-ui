import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SubscriptionScreen from '../../screens/main/bottomtab/SubscriptionScreen';
import MyProfileScreen from '../../screens/main/bottomtab/MyProfileScreen';
import MyMatches from '../../screens/main/bottomtab/MyMatches';
import TabBar from '../../components/main/bottomtab/TabBar';
import HomeStackNavigator from './HomeStackNavigator';
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
            tabBar={props => <TabBar {...props} />}
            initialRouteName={'Home'}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Subscription" component={SubscriptionScreen} />
            <Tab.Screen name="My Profile" component={MyProfileScreen} />
            <Tab.Screen name="My Matches" component={MyMatches} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;

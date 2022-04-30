import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/main/bottomtab/HomeScreen';
import SubscriptionScreen from '../../screens/main/bottomtab/SubscriptionScreen';
import MyProfileScreen from '../../screens/main/bottomtab/MyProfileScreen';
import MyMatches from '../../screens/main/bottomtab/MyMatches';
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
            tabBar={props => <TabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Subscription" component={SubscriptionScreen} />
            <Tab.Screen name="My Profile" component={MyProfileScreen} />
            <Tab.Screen name="My Matches" component={MyMatches} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;

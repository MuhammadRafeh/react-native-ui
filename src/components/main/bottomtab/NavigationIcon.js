import React from 'react'
import { View } from 'react-native'

import Home from '../../../assets/images/bottomtabbar/home.svg';
import Subscription from '../../../assets/images/bottomtabbar/subscription.svg';
import Profile from '../../../assets/images/bottomtabbar/profile.svg';
import Match from '../../../assets/images/bottomtabbar/matches.svg';

import HomeGradient from '../../../assets/images/bottomtabbar/homeGradient.svg';
import SubscriptionGradient from '../../../assets/images/bottomtabbar/subscriptionGradient.svg';
import ProfileGradient from '../../../assets/images/bottomtabbar/profileGradient.svg';
import MatchGradient from '../../../assets/images/bottomtabbar/matchesGradient.svg';

const NavigationIcon = ({ route, isFocused }) => {
    const renderIcon = (route, isFocus) => {
        let height = 20;
        let width = 20;

        switch (route) {
            case "Home":
                return isFocus ? <HomeGradient height={height} width={width} /> : <Home height={height} width={width} />
            case "Subscription":
                return isFocus ? <SubscriptionGradient height={height} width={width} /> : <Subscription height={height} width={width} />
            case "My Profile":
                return isFocus ? <ProfileGradient height={height} width={width} /> : <Profile height={height} width={width} />
            case "My Matches":
                return isFocus ? <MatchGradient height={height} width={width} /> : <Match height={height} width={width} />
            default:
                break;
        }
    }

    return (
        <View>
            {renderIcon(route, isFocused)}
        </View>

    )
}

export default NavigationIcon;

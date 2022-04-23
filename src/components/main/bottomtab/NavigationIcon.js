import React from 'react'
import { View } from 'react-native'

import Home from '../../../assets/images/bottomtabbar/home.svg';
import Match from '../../../assets/images/bottomtabbar/matches.svg';
import Profile from '../../../assets/images/bottomtabbar/profile.svg';
import Subscription from '../../../assets/images/bottomtabbar/subscription.svg';

const NavigationIcon = ({ route, isFocused }) => {
    const renderIcon = (route, isFocus) => {
        let height = 20;
        let width = 20;

        switch (route) {
            case "Home":
                return isFocus ? <Home height={height} width={width} /> : <Home height={height} width={width} />
            case "Subscription":
                return isFocus ? <Subscription height={height} width={width} /> : <Subscription height={height} width={width} />
            case "My Profile":
                return isFocus ? <Profile height={height} width={width} /> : <Profile height={height} width={width} />
            case "My Matches":
                return isFocus ? <Match height={height} width={width} /> : <Match height={height} width={width} />
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

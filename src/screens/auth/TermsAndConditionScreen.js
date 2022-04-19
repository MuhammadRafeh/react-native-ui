import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../constants/theme';
import { hP, wP } from '../../functions/getDPFromPercent';
import Circle from '../../components/UI/Circle';

import Planet from '../../assets/images/termsandcondition/planet.svg';
import SpaceShip from '../../assets/images/termsandcondition/spaceship.svg';
import Sun from '../../assets/images/termsandcondition/sun.svg';
import Octagon from '../../assets/images/termsandcondition/octagon.svg';

const TermsAndConditionScreen = props => {
    return (
        <>

            <LinearGradient colors={[theme.secondary, theme.secondary, theme.secondary, theme.primary]} style={styles.linearGradient} />
            <View style={styles.planet}>
                <Planet width={wP('50%')} fill={"black"} />
            </View>
            <View style={styles.spaceship}>
                <SpaceShip width={wP('13%')} fill={"black"} />
            </View>
            <View style={styles.sun}>
                <Sun width={wP('13%')} fill={"black"} />
            </View>
            <View style={styles.octagon}>
                <Octagon width={wP('13%')} fill={"black"} />
            </View>
        </>
    );
}

export default TermsAndConditionScreen;

const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    planet: {
        position: 'absolute',
        right: 0
    },
    sun: {
        position: 'absolute',
        top: '5%'
    },
    spaceship: {
        position: 'absolute',
        top: '40%',
        right: 0
    },
    octagon: {
        position: 'absolute',
        top: '75%',
        left: '35%'
    }
})

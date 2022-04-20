import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Comet from '../../assets/images/splash/Comet.svg';
import Logo from '../../assets/images/splash/Logo.svg';
import Moon from '../../assets/images/splash/Moon.svg';
import { hP, wP } from '../../functions/getDPFromPercent';
import LinearGradient from 'react-native-linear-gradient';
import theme, { linearGradient } from '../../constants/theme';

const SplashScreen = props => {
    return (
        <>
            <LinearGradient colors={['#0D6FCA', '#26006F', '#4B0384']} style={linearGradient.style} />

            <View style={styles.comet}>
                <Comet width={wP('25%')} fill={"black"} />
            </View>
            <View style={styles.moon}>
                <Moon width={wP('30%')} fill={"black"} />
            </View>
            <View style={styles.logo}>
                <Logo width={wP('13%')} fill={"black"} />
            </View>
        </>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moon: {
        right: '-5.7%',
        bottom: hP('14%'),
        position: 'absolute'
    },
    comet: {
        top: hP('13.5%'),
        right: '-2%',
        position: 'absolute'
    },
})

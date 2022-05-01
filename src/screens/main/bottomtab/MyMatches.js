import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { linearGradient } from '../../../constants/theme';
import RunFire from '../../../assets/images/global/runningFire.svg';
import Logo from '../../../assets/images/global/Logo.svg';
import Planet from '../../../assets/images/global/Planet.svg';
import Circular from '../../../assets/images/global/Circular.svg';
import { hP, wP } from '../../../functions/getDPFromPercent';

const MyMatches = props => {
    return (
        <>
            <LinearGradient colors={['#4B0384', '#26006F', '#0D6FCA']} style={linearGradient.style}
                useAngle={true}
                angle={180}
            />

            <View style={styles.bigSun}>
                <Circular width={wP('13%')} fill={"black"} />
            </View>
            <View style={styles.runSun}>
                <Planet width={wP('25%')} fill={"black"} />
            </View>
            <View style={styles.sun}>
                <RunFire width={wP('30%')} fill={"black"} />
            </View>

            <View style={styles.screen}>
                <View>
                    <Logo />
                </View>
            </View>
        </>
    );
}

export default MyMatches;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: hP('5%')
    },
    bigSun: {
        top: '6%',
        left: '19.7%',
        position: 'absolute'
    },
    sun: {
        right: '-7%',
        bottom: hP('11.4%'),
        position: 'absolute'
    },
    runSun: {
        top: hP('11.8%'),
        right: '-2%',
        position: 'absolute'
    },
})

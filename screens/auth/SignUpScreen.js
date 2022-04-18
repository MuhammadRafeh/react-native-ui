import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BigSun from '../../assets/images/signup/bigSun.svg';
import RunSun from '../../assets/images/signup/runSun.svg';
import Sun from '../../assets/images/signup/sun.svg';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../constants/theme';

const SignUpScreen = props => {
    return (
        <>
            <LinearGradient colors={[theme.primary, theme.secondary, theme.secondary, theme.tertairy, theme.tertairy]} style={styles.linearGradient} />
            <View style={{ top: 70, left: 71, position: 'absolute' }}>
                <BigSun width={51} height={51} fill={"black"} />
            </View>
            <View style={{ top: 145, right: -4, position: 'absolute' }}>
                <RunSun width={117} height={84} fill={"black"} />
            </View>
            <View style={{ right: '-5.7%', bottom: '18%', position: 'absolute' }}>
                <Sun width={117} height={84} fill={"black"} />
            </View>
            <View style={styles.screen}>
            </View>
        </>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

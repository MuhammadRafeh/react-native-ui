import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import BigSun from '../../assets/images/signup/bigSun.svg';
import RunSun from '../../assets/images/signup/runSun.svg';
import Sun from '../../assets/images/signup/sun.svg';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../constants/theme';
import TextInput from '../../components/UI/TextInput';
import { hP, wP } from '../../functions/getDPFromPercent';
import Button from '../../components/UI/Button';

const SignUpScreen = props => {
    return (
        <>
            <LinearGradient colors={[theme.primary, theme.secondary, theme.secondary, theme.tertairy, theme.tertairy]} style={styles.linearGradient} />
            <View style={{ top: '8%', left: '19.7%', position: 'absolute' }}>
                <BigSun width={wP('13%')} fill={"black"} />
            </View>
            <View style={{ top: hP('13.5%'), right: '-2%', position: 'absolute' }}>
                <RunSun width={wP('25%')} fill={"black"} />
            </View>
            <View style={{ right: '-5.7%', bottom: hP('14%'), position: 'absolute' }}>
                <Sun width={wP('30%')} fill={"black"} />
            </View>
            <View style={styles.screen}>
                <View>
                    <Text style={styles.title}>
                        SIGN UP
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <TextInput placeholder="Email" />
                </View>
                <View style={styles.contentContainer}>
                    <TextInput placeholder="Password" />
                </View>
                <View style={styles.contentContainer}>
                    <TextInput placeholder="Full Name" />
                </View>
                <View style={styles.contentContainer}>
                    <Button title={'SIGN UP'} />
                </View>
                <View style={styles.label}>
                    <Text style={styles.firstText}>Already have an account?   </Text>
                    <Text style={{ color: '#D13AF7', textDecorationLine: 'underline' }}>Login</Text>
                </View>
                <View style={styles.label}>
                    <Text style={styles.firstText}>I have read the   </Text>
                    <Text style={{ color: '#D13AF7', textDecorationLine: 'underline' }}>Terms & Condition</Text>
                </View>
            </View>
        </>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center'
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 8
    },
    contentContainer: {
        width: wP('90%'),
        height: hP('7%'),
        alignSelf: 'center',
        marginVertical: 16
    },
    label: {
        alignSelf: 'center',
        width: wP('89%'),
        height: hP('4%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstText: {
        opacity: 0.6
    }
})

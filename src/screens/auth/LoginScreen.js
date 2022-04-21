import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme, { linearGradient } from '../../constants/theme';
import Circular from '../../assets/images/login/Circular.svg';
import Planet from '../../assets/images/login/Planet.svg';
import Rainbow from '../../assets/images/login/Rainbow.svg';
import { hP, wP } from '../../functions/getDPFromPercent';
import * as Animatable from 'react-native-animatable';
import TextInput from '../../components/UI/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/UI/Button';
import validateEmail from '../../functions/validateEmail';
import getFontSize from '../../functions/getFontSize';

const LoginScreen = props => {

    const emailRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wasSignUpPressed, setWasSignUpPressed] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);

    const handleInputChange = (type, text) => {
        if (type == 'email') {
            setEmail(text);
        } else if (type == 'password') {
            setPassword(text)
        }
    }

    const handleSignin = () => {
        setWasSignUpPressed(true);
        Keyboard.dismiss();
        if (!validateEmail(email)) {
            setIsEmailValid(false);
            emailRef.current?.bounceIn();
        } else {
            setIsEmailValid(true);
        }
    }

    return (
        <>
            <LinearGradient colors={[theme.primary, theme.secondary, theme.secondary, theme.tertairy, theme.tertairy]} style={linearGradient.style} />

            <View style={styles.circular}>
                <Circular width={wP('15%')} fill={"black"} />
            </View>
            <View style={styles.planet}>
                <Planet width={wP('18%')} fill={"black"} />
            </View>
            <View style={styles.rainbow}>
                <Rainbow width={wP('30%')} fill={"black"} />
            </View>

            <View style={styles.screen}>

                <View>
                    <Text style={styles.title}>
                        LOGIN
                    </Text>
                </View>

                <Animatable.View style={[styles.contentContainer, wasSignUpPressed ? isEmailValid ? null : styles.error : null]} useNativeDriver={true} ref={emailRef}>
                    <TextInput placeholder="Email" value={email} onChangeText={handleInputChange.bind(null, 'email')} />
                </Animatable.View>

                <Animatable.View style={styles.contentContainer} useNativeDriver={true}>
                    <TextInput style={{ paddingRight: 50 }} placeholder="Password" value={password} onChangeText={handleInputChange.bind(null, 'password')} secureTextEntry={hidePassword} />
                    <TouchableOpacity style={{ position: 'absolute', right: 10, top: '23%' }} onPress={() => setHidePassword(!hidePassword)}>
                        <Text numberOfLines={1} adjustsFontSizeToFit={true}>
                            <Icon name={hidePassword ? 'eye' : 'eye-off'} size={30} />
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>

                <View style={styles.contentContainer}>
                    <Button title={'LOGIN'} onPress={handleSignin} />
                </View>

                <View style={styles.lastRowText}>
                    <View>
                        <Text style={styles.firstText}>
                            Forgot Password?
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.actions}>
                            Sign Up
                        </Text>
                    </View>
                </View>

            </View>
        </>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        top: hP('25%')
    },
    planet: {
        right: '3%',
        top: hP('15%'),
        position: 'absolute'
    },
    circular: {
        top: '69.5%',
        left: wP('5%'),
        position: 'absolute'
    },
    rainbow: {
        top: hP('4.5%'),
        left: '8%',
        position: 'absolute'
    },
    contentContainer: {
        width: wP('90%'),
        height: hP('7%'),
        alignSelf: 'center',
        marginVertical: 16
    },
    title: {
        textAlign: 'center',
        fontSize: getFontSize(25),
        marginBottom: 7,
        fontFamily: '3',
        letterSpacing: 0.5,
        top: 4,
        transform: [
            { rotate: '-0.2deg' }
        ]
    },
    lastRowText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    actions: {
        color: theme.pink,
        textDecorationLine: 'underline',
        fontFamily: '12',
        marginTop: 8
    },
    firstText: {
        opacity: 0.6,
        fontFamily: '14',
        letterSpacing: 0.15
    },
})

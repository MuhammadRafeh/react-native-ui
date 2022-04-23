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
import Circle from '../../components/UI/Circle';

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
            <Circle left={'10%'} top={'2%'} size={2} />
            <Circle left={'50%'} top={'0%'} size={2} />
            <Circle left={'90%'} top={'1%'} size={2} />
            <Circle left={'95%'} top={'5%'} size={2} />
            <Circle left={'70%'} top={'5%'} size={2} />
            <Circle left={'45%'} top={'5%'} size={2} />
            <Circle left={'18%'} top={'5%'} size={2} />

            <Circle left={'50%'} top={'10%'} size={3} />
            <Circle left={'60%'} top={'8%'} size={3} />
            <Circle left={'75%'} top={'10%'} size={3} />
            <Circle left={'23%'} top={'20%'} size={3} />
            <Circle left={'90%'} top={'20%'} size={3} />
            <Circle left={'6%'} top={'20%'} size={3} />

            <Circle left={'2%'} top={'30%'} size={3} />
            <Circle left={'24%'} top={'50%'} size={3} />
            <Circle left={'87%'} top={'40%'} size={3} />
            <Circle left={'80%'} top={'58%'} size={5} />

            <Circle left={'20%'} top={'70%'} size={3} />
            <Circle left={'30%'} top={'85%'} size={3} />
            <Circle left={'65%'} top={'34%'} size={3} />
            <Circle left={'73%'} top={'67%'} size={3} />
            <Circle left={'30%'} top={'23%'} size={3} />
            <Circle left={'6%'} top={'43%'} size={3} />

            <Circle left={'67%'} top={'30%'} size={3} />
            <Circle left={'3%'} top={'10%'} size={3} />
            <Circle left={'67%'} top={'20%'} size={3} />
            <Circle left={'30%'} top={'68%'} size={5} />

            <Circle left={'95%'} top={'90%'} size={2} />
            <Circle left={'70%'} top={'80%'} size={2} />
            <Circle left={'45%'} top={'70%'} size={2} />
            <Circle left={'18%'} top={'96%'} size={2} />

            <Circle left={'95%'} top={'86%'} size={2} />
            <Circle left={'70%'} top={'94%'} size={2} />
            <Circle left={'45%'} top={'89%'} size={2} />
            <Circle left={'18%'} top={'54%'} size={2} />

            <Circle left={'10%'} top={'99%'} size={5} />
            <Circle left={'96%'} top={'98%'} size={2} />

            <Circle left={'75%'} top={'90%'} size={5} />
            <Circle left={'23%'} top={'80%'} size={5} />
            <Circle left={'90%'} top={'70%'} size={5} />
            <Circle left={'6%'} top={'85%'} size={5} />
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

                <Animatable.View style={styles.contentContainer} useNativeDriver={true} ref={emailRef}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={handleInputChange.bind(null, 'email')}
                        style={wasSignUpPressed ? isEmailValid ? null : styles.error : null}
                    />
                </Animatable.View>

                <Animatable.View style={styles.contentContainer} useNativeDriver={true}>
                    <TextInput style={{ paddingRight: 50 }} placeholder="Password" value={password} onChangeText={handleInputChange.bind(null, 'password')} secureTextEntry={hidePassword} />
                    <TouchableOpacity style={{ position: 'absolute', right: 10, top: '23%' }} onPress={() => setHidePassword(!hidePassword)}>
                        <Text numberOfLines={1} adjustsFontSizeToFit={true} style={styles.eye}>
                            <Icon name={hidePassword ? 'eye' : 'eye-off'} size={getFontSize(26)} />
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
    error: {
        borderColor: 'red'
    },
    eye: {
        opacity: 0.65
    }
})

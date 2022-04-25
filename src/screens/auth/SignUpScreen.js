import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput as TX, Keyboard } from 'react-native';
import BigSun from '../../assets/images/signup/bigSun.svg';
import RunSun from '../../assets/images/signup/runSun.svg';
import Sun from '../../assets/images/signup/sun.svg';
import LinearGradient from 'react-native-linear-gradient';
import theme, { linearGradient } from '../../constants/theme';
import TextInput from '../../components/UI/TextInput';
import { hP, wP } from '../../functions/getDPFromPercent';
import Button from '../../components/UI/Button';
import Circle from '../../components/UI/Circle';
import getFontSize from '../../functions/getFontSize';
import validateEmail from '../../functions/validateEmail';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = props => {

    const emailRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    // const [isFullNameValid, setIsFullNameValid] = useState(false);

    const [hidePassword, setHidePassword] = useState(true);

    const [wasSignUpPressed, setWasSignUpPressed] = useState(false);

    const handleLoginPress = () => {
        props.navigation.navigate('Login')
    }
    const handleTermsAndConPress = () => {
        props.navigation.navigate('TermsAndCondition');
    }

    const handleInputChange = (type, text) => {
        if (type == 'email') {
            setEmail(text);
        } else if (type == 'password') {
            setPassword(text)
        } else if (type == 'fullName') {
            setFullName(text);
        }
    }

    const handleSignUp = () => {
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

            <Circle left={'57%'} top={'16%'} size={14} />

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

            <View style={styles.bigSun}>
                <BigSun width={wP('13%')} fill={"black"} />
            </View>
            <View style={styles.runSun}>
                <RunSun width={wP('25%')} fill={"black"} />
            </View>
            <View style={styles.sun}>
                <Sun width={wP('30%')} fill={"black"} />
            </View>

            <View style={styles.screen}>
                <View>
                    <Text style={styles.title}>
                        SIGN UP
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
                            <Icon name={hidePassword ? 'eye' : 'eye-off'} size={getFontSize(26)} color={'#fff'} />
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View style={styles.contentContainer} useNativeDriver={true}>
                    <TextInput placeholder="Full Name" value={fullName} onChangeText={handleInputChange.bind(null, 'fullName')} />
                </Animatable.View>

                <View style={styles.contentContainer}>
                    <Button title={'SIGN UP'} onPress={handleSignUp} />
                </View>

                <View style={styles.actionContainer}>
                    <View style={styles.label}>
                        <Text style={styles.firstText}>Already have an account?   </Text>
                        <TouchableOpacity onPress={handleLoginPress}>
                            <Text style={styles.actions}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.label}>
                        <Text style={styles.firstText}>I have read the   </Text>
                        <TouchableOpacity onPress={handleTermsAndConPress}>
                            <Text style={styles.actions}>Terms & Condition</Text>
                        </TouchableOpacity>
                    </View>
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
    title: {
        textAlign: 'center',
        fontSize: getFontSize(25),
        marginBottom: 8,
        fontFamily: '3',
        letterSpacing: 0.5,
        top: 4,
        color: '#fff',
        transform: [
            { rotate: '-0.2deg' }
        ]
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
        opacity: 0.6,
        fontFamily: '14',
        letterSpacing: 0.15,
        color: '#fff'
    },
    bigSun: {
        top: '6%',
        left: '19.7%',
        position: 'absolute'
    },
    sun: {
        right: '-5.7%',
        bottom: hP('14%'),
        position: 'absolute'
    },
    runSun: {
        top: hP('13.5%'),
        right: '-2%',
        position: 'absolute'
    },
    actions: {
        color: theme.pink,
        textDecorationLine: 'underline',
        fontFamily: '12'
    },
    actionContainer: {
        marginTop: 5
    },
    error: {
        borderColor: 'red'
    },
    eye: {
        opacity: 0.65
    }
});

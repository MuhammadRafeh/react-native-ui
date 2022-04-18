import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BigSun from '../../assets/images/signup/bigSun.svg';

const SignUpScreen = props => {
    return (
        <View style={styles.screen}>
            <BigSun width={120} height={40} fill={"black"} />
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'blue',
    }
})

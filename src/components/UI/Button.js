import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { hP } from '../../functions/getDPFromPercent';

const Button = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <>
                <LinearGradient colors={['#8259F2', '#D751F9']} style={styles.linearGradient}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
                <Text style={styles.title}>{props.title}</Text>
            </>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.5
    },
    title: {
        fontSize: 18
    }
})

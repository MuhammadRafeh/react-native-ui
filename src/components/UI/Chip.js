import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { linearGradient } from '../../constants/theme';

const Chip = ({ title }) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#7446F0', '#D339F7']} style={linearGradient.style}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                useAngle={true}
                angle={92.13} />
            <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>{title}</Text>
        </View>
    );
}

export default Chip;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 3.5,
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        paddingHorizontal: 10,
        marginHorizontal: 4,
        marginVertical: 4
    },
    text: {
        color: '#fff',
        fontFamily: '15',
        top: 1
    }
})

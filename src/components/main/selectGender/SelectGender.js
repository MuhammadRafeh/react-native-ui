import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { linearGradient } from '../../../constants/theme';
import { hP, wP } from '../../../functions/getDPFromPercent';

const SelectGender = props => {
    const { isItSelected, pic, title, onPress } = props;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, isItSelected ? styles.selected : styles.notSelected]}>
                {isItSelected && <LinearGradient
                    colors={['rgba(116, 70, 240, 1)', 'rgba(211, 57, 247,0.9)']}
                    style={linearGradient.style}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }} />}

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={pic} style={{ flex: 1, tintColor: isItSelected ? '#fff' : null }} resizeMode={'contain'} />
                </View>
                <View style={{ flex: 0.3 }}>
                    <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit={true}>
                        {title}
                    </Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
}

export default SelectGender;

const styles = StyleSheet.create({
    container: {
        width: wP('36%'),
        height: hP('18%'),
        borderRadius: 10,
        justifyContent: 'center',
        overflow: 'hidden',
        marginHorizontal: 10
    },
    notSelected: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    selected: {},
    title: {
        color: '#fff',
        fontFamily: '3',
        letterSpacing: 1,
        textAlign: 'center'
    }
})

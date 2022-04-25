import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme, { linearGradient } from '../../constants/theme';
import Circular from '../../assets/images/global/Circular.svg';
import RunningFire from '../../assets/images/global/runningFire.svg';
import { hP, wP } from '../../functions/getDPFromPercent';
import SelectGender from '../../components/main/selectGender/SelectGender';
import Button from '../../components/UI/Button';

const MyMatches = props => {
    const [selected, setSelected] = useState(0);
    const onSelect = id => {
        setSelected(id);
    }
    return (
        <>
            <LinearGradient colors={[theme.secondary, theme.secondary, theme.secondary, theme.primary]} style={linearGradient.style} />

            <View style={styles.circular}>
                <Circular width={wP('13%')} fill={"black"} />
            </View>
            <View style={styles.runningFire}>
                <RunningFire width={wP('20%')} fill={"black"} />
            </View>

            <View style={styles.screen} >

                <View>
                    <Text style={styles.title}>
                        SELECT GENDER
                    </Text>
                </View>

                <View style={{ width: wP('78%'), alignSelf: 'center' }}>
                    <View style={styles.options}>
                        <SelectGender onPress={onSelect.bind(null, 0)} isItSelected={0 == selected} pic={require('../../assets/images/genderselection/male.png')} title={'MALE'} />
                        <SelectGender onPress={onSelect.bind(null, 1)} isItSelected={1 == selected} pic={require('../../assets/images/genderselection/female.png')} title={'FEMALE'} />
                    </View>
                    <View style={styles.options}>
                        <SelectGender onPress={onSelect.bind(null, 2)} isItSelected={2 == selected} pic={require('../../assets/images/genderselection/transmale.png')} title={'TRANSMALE'} />
                        <SelectGender onPress={onSelect.bind(null, 3)} isItSelected={3 == selected} pic={require('../../assets/images/genderselection/transfemale.png')} title={'TRANSFEMALE'} />
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <Button title={'NEXT'} onPress={() => { }} style={{ borderRadius: hP('5%') / 2 }} />
                </View>

            </View>
        </>
    );
}

export default MyMatches;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        top: hP('12%')
    },
    circular: {
        top: '2%',
        right: '3.7%',
        position: 'absolute',
        transform: [
            { rotate: '220deg' }
        ]
    },
    runningFire: {
        left: '2%',
        bottom: hP('4%'),
        position: 'absolute',
        transform: [
            { rotate: '-132.64deg' }
        ]
    },
    title: {
        textAlign: 'center',
        fontSize: getFontSize(28),
        marginBottom: 25,
        fontFamily: '3',
        letterSpacing: 0.5,
        top: 4,
        color: '#fff',
        transform: [
            { rotate: '-0.2deg' }
        ]
    },
    secondElement: {
        marginLeft: 20
    },
    options: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    contentContainer: {
        width: wP('78%'),
        height: hP('5%'),
        alignSelf: 'center',
        marginVertical: 16
    },
})

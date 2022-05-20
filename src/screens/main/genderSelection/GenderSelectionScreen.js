import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Circular from '../../../assets/images/global/Circular.svg';
import RunningFire from '../../../assets/images/global/runningFire.svg';
import { hP, wP } from '../../../functions/getDPFromPercent';
import SelectGender from '../../../components/main/selectGender/SelectGender';
import Button from '../../../components/UI/Button';
import Circle from '../../../components/UI/Circle';
import theme, { linearGradient } from '../../../constants/theme';

const GenderSelectionScreen = props => {
    const [selected, setSelected] = useState(0);
    const onSelect = id => {
        setSelected(id);
    }
    return (
        <>
            <LinearGradient colors={[theme.secondary, theme.secondary, theme.secondary, theme.primary]} style={linearGradient.style} />


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
                        <SelectGender onPress={onSelect.bind(null, 0)} isItSelected={0 == selected} pic={require('../../../assets/images/genderselection/male.png')} title={'MALE'} />
                        <SelectGender onPress={onSelect.bind(null, 1)} isItSelected={1 == selected} pic={require('../../../assets/images/genderselection/female.png')} title={'FEMALE'} />
                    </View>
                    <View style={styles.options}>
                        <SelectGender onPress={onSelect.bind(null, 2)} isItSelected={2 == selected} pic={require('../../../assets/images/genderselection/transmale.png')} title={'TRANSMALE'} />
                        <SelectGender onPress={onSelect.bind(null, 3)} isItSelected={3 == selected} pic={require('../../../assets/images/genderselection/transfemale.png')} title={'TRANSFEMALE'} />
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <Button title={'NEXT'} onPress={() => { props.navigation.replace('BottomTab') }} style={{ borderRadius: hP('5%') / 2 }} />
                </View>

            </View>
        </>
    );
}

export default GenderSelectionScreen;

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

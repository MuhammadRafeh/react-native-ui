import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../constants/theme';
import { hP, wP } from '../../functions/getDPFromPercent';
import Circle from '../../components/UI/Circle';

import Planet from '../../assets/images/termsandcondition/planet.svg';
import SpaceShip from '../../assets/images/termsandcondition/spaceship.svg';
import Sun from '../../assets/images/termsandcondition/sun.svg';
import Octagon from '../../assets/images/termsandcondition/octagon.svg';
import getFontSize from '../../functions/getFontSize';

const TermsAndConditionScreen = props => {
    return (
        <>

            <LinearGradient colors={[theme.secondary, theme.secondary, theme.secondary, theme.primary]} style={styles.linearGradient} />
            <View style={styles.planet}>
                <Planet width={wP('50%')} fill={"black"} />
            </View>
            <View style={styles.spaceship}>
                <SpaceShip width={wP('13%')} fill={"black"} />
            </View>
            <View style={styles.sun}>
                <Sun width={wP('13%')} fill={"black"} />
            </View>
            <View style={styles.octagon}>
                <Octagon width={wP('13%')} fill={"black"} />
            </View>

            <View style={{ flex: 1, marginTop: wP('50%'), width: wP('90%'), alignSelf: 'center' }}>
                <View style={{ marginBottom: hP('2%') }}>
                    <Text style={{ fontSize: getFontSize(39.5), fontFamily: '3', letterSpacing: 0.5 }} numberOfLines={1} adjustsFontSizeToFit={true}>TERMS & CONDITION</Text>
                </View>

                <View style={{ marginBottom: hP('1%') }}>
                    <Text style={{ fontFamily: '15', fontSize: getFontSize(13.5), letterSpacing: 0.2 }}>Lorem Ipsum is simply dummy?</Text>
                </View>
                <View style={{ marginBottom: hP('4%'), width: wP('75%') }}>
                    <Text style={{ opacity: 0.8, fontFamily: '10', fontSize: getFontSize(13) }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </Text>
                </View>

                <View style={{ marginBottom: hP('1%') }}>
                    <Text style={{ fontFamily: '15', fontSize: getFontSize(13.5), letterSpacing: 0.2 }}>
                        Lorem Ipsum is simply dummy?
                    </Text>
                </View>
                <View style={{ width: wP('75%') }}>
                    <Text style={{ opacity: 0.8, fontFamily: '10', fontSize: getFontSize(13) }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Text>
                </View>

            </View>
        </>
    );
}

export default TermsAndConditionScreen;

const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    planet: {
        position: 'absolute',
        right: 0
    },
    sun: {
        position: 'absolute',
        top: '5%'
    },
    spaceship: {
        position: 'absolute',
        top: '40%',
        right: 0
    },
    octagon: {
        position: 'absolute',
        top: '83%',
        left: '35%'
    }
})

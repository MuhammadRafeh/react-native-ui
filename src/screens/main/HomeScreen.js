import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme, { linearGradient } from '../../constants/theme';
import { wP, hP } from '../../functions/getDPFromPercent';
import Planet from '../../assets/images/global/planet.svg';
import Logo from '../../assets/images/global/Logo.svg';
import SwipeCard from '../../components/main/Home/SwipeCard';

const HomeScreen = props => {
    return (
        <>
            <LinearGradient colors={[theme.secondary, theme.secondary, theme.secondary, theme.primary]} style={linearGradient.style} />

            <View style={styles.planet}>
                <Planet width={wP('20%')} fill={"black"} />
            </View>
            <View style={styles.screen}>
                <View style={{ height: hP('20%'), justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={{ top: 20 }}>
                        <Logo width={wP('68%')} fill={"black"} />
                    </View>
                </View>
                <View style={{ height: hP('80%') }}>
                    <SwipeCard
                        name={'Amy Cole'}
                        age={23}
                        chips={['Shopping', 'Travel', 'Music']}
                        image={require('../../assets/images/home/boy.jpg')}
                    />
                </View>
            </View>
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    planet: {
        position: 'absolute',
        right: 0,
        top: -35
    }
})

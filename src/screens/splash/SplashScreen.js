import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Comet from '../../assets/images/splash/Comet.svg';
import Logo from '../../assets/images/global/Logo.svg';
import Moon from '../../assets/images/splash/Moon.svg';
import { hP, wP } from '../../functions/getDPFromPercent';
import LinearGradient from 'react-native-linear-gradient';
import { linearGradient } from '../../constants/theme';
import Circle from '../../components/UI/Circle';

const SplashScreen = props => {
    useEffect(() => {
        setTimeout(() => props.navigation.replace('Signup'), 1);
    }, [])
    return (
        <>
            <LinearGradient colors={['#0D6FCA', '#26006F', '#4B0384']} style={linearGradient.style} />
            <Circle left={'10%'} top={'2%'} size={2} opacity={1} />
            <Circle left={'50%'} top={'0%'} size={2} opacity={1} />
            <Circle left={'90%'} top={'1%'} size={2} opacity={1} />
            <Circle left={'95%'} top={'5%'} size={2} opacity={1} />
            <Circle left={'70%'} top={'5%'} size={2} opacity={1} />
            <Circle left={'45%'} top={'5%'} size={2} opacity={1} />
            <Circle left={'18%'} top={'5%'} size={2} opacity={1} />

            <Circle left={'50%'} top={'10%'} size={3} opacity={1} />
            <Circle left={'60%'} top={'8%'} size={3} opacity={1} />
            <Circle left={'75%'} top={'10%'} size={3} opacity={1} />
            <Circle left={'23%'} top={'20%'} size={3} opacity={1} />
            <Circle left={'90%'} top={'20%'} size={3} opacity={1} />
            <Circle left={'6%'} top={'20%'} size={3} opacity={1} />

            <Circle left={'2%'} top={'30%'} size={3} opacity={1} />
            <Circle left={'24%'} top={'50%'} size={3} opacity={1} />
            <Circle left={'87%'} top={'40%'} size={3} opacity={1} />
            <Circle left={'80%'} top={'58%'} size={5} opacity={1} />

            <Circle left={'57%'} top={'16%'} size={5} opacity={1} />

            <Circle left={'95%'} top={'90%'} size={2} opacity={1} />
            <Circle left={'70%'} top={'80%'} size={2} opacity={1} />
            <Circle left={'45%'} top={'70%'} size={2} opacity={1} />
            <Circle left={'18%'} top={'96%'} size={2} opacity={1} />

            <Circle left={'95%'} top={'86%'} size={2} opacity={1} />
            <Circle left={'70%'} top={'94%'} size={2} opacity={1} />
            <Circle left={'45%'} top={'89%'} size={2} opacity={1} />
            <Circle left={'18%'} top={'54%'} size={2} opacity={1} />

            <Circle left={'10%'} top={'99%'} size={5} opacity={1} />
            <Circle left={'96%'} top={'98%'} size={2} opacity={1} />

            <Circle left={'75%'} top={'90%'} size={5} opacity={1} />
            <Circle left={'23%'} top={'80%'} size={5} opacity={1} />
            <Circle left={'90%'} top={'70%'} size={5} opacity={1} />
            <Circle left={'6%'} top={'85%'} size={5} opacity={1} />

            {/*  */}

            <Circle left={'17%'} top={'6%'} size={2} opacity={1} />
            <Circle left={'20%'} top={'5%'} size={2} opacity={1} />
            <Circle left={'94%'} top={'17%'} size={2} opacity={1} />
            <Circle left={'25%'} top={'53%'} size={2} opacity={1} />
            <Circle left={'40%'} top={'52%'} size={2} opacity={1} />
            <Circle left={'46%'} top={'57%'} size={2} opacity={1} />
            <Circle left={'38%'} top={'3%'} size={2} opacity={1} />

            <Circle left={'20%'} top={'70%'} size={3} opacity={1} />
            <Circle left={'30%'} top={'85%'} size={3} opacity={1} />
            <Circle left={'65%'} top={'34%'} size={3} opacity={1} />
            <Circle left={'73%'} top={'67%'} size={3} opacity={1} />
            <Circle left={'30%'} top={'23%'} size={3} opacity={1} />
            <Circle left={'6%'} top={'43%'} size={3} opacity={1} />

            <Circle left={'67%'} top={'30%'} size={3} opacity={1} />
            <Circle left={'3%'} top={'10%'} size={3} opacity={1} />
            <Circle left={'67%'} top={'20%'} size={3} opacity={1} />
            <Circle left={'30%'} top={'68%'} size={5} opacity={1} />

            <Circle left={'37%'} top={'86%'} size={5} opacity={1} />

            <Circle left={'65%'} top={'40%'} size={2} opacity={1} />
            <Circle left={'10%'} top={'20%'} size={2} opacity={1} />
            <Circle left={'35%'} top={'78%'} size={2} opacity={1} />
            <Circle left={'58%'} top={'91%'} size={2} opacity={1} />

            <Circle left={'25%'} top={'33%'} size={2} opacity={1} />
            <Circle left={'40%'} top={'86%'} size={2} opacity={1} />
            <Circle left={'65%'} top={'27%'} size={2} opacity={1} />
            <Circle left={'78%'} top={'23%'} size={2} opacity={1} />

            <Circle left={'20%'} top={'91%'} size={5} opacity={1} />
            <Circle left={'66%'} top={'92%'} size={2} opacity={1} />

            <Circle left={'45%'} top={'95%'} size={5} opacity={1} />
            <Circle left={'23%'} top={'40%'} size={3} opacity={1} />
            <Circle left={'20%'} top={'70%'} size={5} opacity={1} />
            <Circle left={'8%'} top={'64%'} size={5} opacity={1} />


            <View style={styles.comet}>
                <Comet width={wP('15%')} fill={"black"} />
            </View>
            <View style={styles.moon}>
                <Moon width={wP('18%')} fill={"black"} />
            </View>
            <View style={styles.logo}>
                <Logo width={wP('93%')} fill={"black"} />
            </View>
        </>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moon: {
        right: '0%',
        top: hP('9.5%'),
        position: 'absolute'
    },
    comet: {
        bottom: hP('3%'),
        left: '4%',
        position: 'absolute'
    },
})

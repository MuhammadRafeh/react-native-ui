import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Moon from '../../../../assets/images/global/Moon.svg';
import theme, { linearGradient } from '../../../../constants/theme';
import { hP, wP } from '../../../../functions/getDPFromPercent';
import getFontSize from '../../../../functions/getFontSize';
import Like from '../../../../assets/images/matched/like.svg';
import RunSun from '../../../../assets/images/global/runSun.svg';
import Sun from '../../../../assets/images/global/sun.svg';
import Button from '../../../../components/UI/Button';
import Circle from '../../../../components/UI/Circle';

const MatchedScreen = props => {

    const scaleAnim = useRef(new Animated.Value(0.88)).current;

    const { name, pic } = props.route.params;

    useEffect(() => {
        Animated.loop(Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 0.88,
                duration: 1000,
                useNativeDriver: true
            }),
        ])).start();
    }, [])

    return (
        <>

            <LinearGradient colors={['#0D6FCA', '#26006F', '#4B0384']} style={linearGradient.style}
                useAngle={true}
                angle={180}
            />
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

            <View style={styles.moon}>
                <Moon width={wP('12%')} fill={"black"} />
            </View>
            <View style={styles.runSun}>
                <RunSun width={wP('33%')} fill={"black"} />
            </View>
            <View style={styles.sun}>
                <Sun width={wP('36%')} fill={"black"} />
            </View>

            <View style={styles.screen}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: '3', fontSize: getFontSize(32), color: '#fff', letterSpacing: -0.165 }}>
                        IT’S A MATCH
                    </Text>
                    <Text style={{ top: -6, fontFamily: '3', fontSize: getFontSize(32), color: '#fff' }}>
                        🎉
                    </Text>
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', opacity: 0.8 }} numberOfLines={1} adjustsFontSizeToFit={true}>
                        You and {name} have liked each other.
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[styles.dp, { marginRight: '5%' }]}>
                        <Image style={{ width: '100%', height: '100%' }} source={pic} resizeMode={'contain'} />
                    </View>
                    <View style={styles.dp}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../../../../assets/images/matched/boy.png')} resizeMode={'contain'} />
                    </View>

                    <View style={{ position: 'absolute', width: wP('21%'), height: wP('21%'), borderRadius: wP('21%') / 2, backgroundColor: '#E8387F', justifyContent: 'center', alignItems: 'center' }}>
                        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                            <Like />
                        </Animated.View>
                    </View>
                </View>

                <View style={{ position: 'absolute', width: wP('76%'), height: hP('7.5%'), alignSelf: 'center', bottom: '10%' }}>
                    <View style={{ height: '80%', width: '100%' }}>
                        <Button title="Message Her!" />
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', marginTop: 14 }} onPress={() => props.navigation.goBack()}>
                        <Text style={{ color: '#fff', opacity: 0.7, fontSize: 12 }}>
                            Keep Swiping
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
}

export default MatchedScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: hP('13%')
    },
    moon: {
        right: '0%',
        top: hP('-2.5%'),
        position: 'absolute'
    },
    dp: {
        width: wP('36%'),
        height: wP('36%'),
        borderRadius: wP('36%') / 2,
        borderWidth: 5,
        borderColor: '#fff',
        overflow: 'hidden'
    },
    sun: {
        left: '6%',
        top: hP('44%'),
        position: 'absolute'
    },
    runSun: {
        top: hP('58%'),
        left: '50%',
        position: 'absolute'
    },
})

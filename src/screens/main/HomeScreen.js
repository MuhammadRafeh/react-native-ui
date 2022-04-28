import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme, { linearGradient } from '../../constants/theme';
import { wP, hP } from '../../functions/getDPFromPercent';
import Planet from '../../assets/images/global/planet.svg';
import Logo from '../../assets/images/global/Logo.svg';
import SwipeCard from '../../components/main/Home/SwipeCard';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


const assets = [
    {
        name: 'Amy Cole',
        age: 23,
        chips: ['Shopping', 'Travel', 'Music'],
        image: require('../../assets/images/home/boy.jpg')
    },
    {
        name: 'Akif Pervaiz',
        age: 22,
        chips: ['Dancing', 'Music', 'sports'],
        image: require('../../assets/images/home/boy2.jpg')
    },
    {
        name: 'Umar Siddiqi',
        age: 24,
        chips: ['Swimming', 'Cricket', 'BasketBall'],
        image: require('../../assets/images/home/boy3.jpg')
    }
]

const CARD_HEIGHT = hP('72%');

const HomeScreen = props => {

    const translateY = useSharedValue(0);

    const panHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startY = translateY.value;
        },
        onActive: (e, context) => {
            translateY.value = context.startY + e.translationY
        },
        onFinish: (e) => {
            if (e.velocityY < -10) {//going down
                translateY.value -= CARD_HEIGHT
            } else if (e.velocityY > 10) { //going up
                translateY.value += CARD_HEIGHT
            }
        }
    });

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: translateY.value }
            ]
        }
    })

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
                    <PanGestureHandler onGestureEvent={panHandler}>
                        <Animated.View style={[animatedStyles]}>
                            {
                                assets.map((item, key) => (
                                    <SwipeCard
                                        key={key}
                                        name={item.name}
                                        age={item.age}
                                        chips={item.chips}
                                        image={item.image}
                                    />
                                ))
                            }
                        </Animated.View>
                    </PanGestureHandler>
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

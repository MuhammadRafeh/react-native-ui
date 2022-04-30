import React from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme, { linearGradient } from '../../../constants/theme';
import Planet from '../../../assets/images/global/planet.svg';
import Logo from '../../../assets/images/global/Logo.svg';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedRef, scrollTo, useSharedValue, runOnUI } from 'react-native-reanimated';
import SwipeCard from '../../../components/main/Home/SwipeCard';
import { hP, wP } from '../../../functions/getDPFromPercent';


const assets = [
    {
        name: 'Amy Cole',
        age: 23,
        chips: ['Shopping', 'Travel', 'Music'],
        image: require('../../../assets/images/home/boy.jpg')
    },
    {
        name: 'Akif Pervaiz',
        age: 22,
        chips: ['Dancing', 'Music', 'sports'],
        image: require('../../../assets/images/home/boy2.jpg')
    },
    {
        name: 'Umar Siddiqi',
        age: 24,
        chips: ['Swimming', 'Cricket', 'BasketBall'],
        image: require('../../../assets/images/home/boy3.jpg')
    }
]

const CARD_HEIGHT = hP('80%');

const HomeScreen = props => {

    const list = useAnimatedRef();

    const translateY = useSharedValue(0);

    const panHandler = useAnimatedGestureHandler({
        onActive: (e) => {
            scrollTo(list, 0, translateY.value + (-e.translationY), false)
        },
        onFinish: (e) => {
            const currentScroll = (translateY.value + (-e.translationY)) / CARD_HEIGHT;
            const index = Math.round(currentScroll) //index also gives bad values
            let nextItem = 0;
            if (e.velocityY < -10 && (index < assets.length - 1 && index >= 0)) {//going down
                if (Math.max(index, currentScroll) == currentScroll) {
                    nextItem = ((index) * CARD_HEIGHT) + CARD_HEIGHT
                } else {
                    nextItem = ((index) * CARD_HEIGHT)
                }
            } else if (e.velocityY > 10 && (index <= assets.length - 1 && index > 0)) { //going up
                if (Math.min(index, currentScroll) == currentScroll) {
                    nextItem = ((index - 1) * CARD_HEIGHT)
                } else {
                    nextItem = (index * CARD_HEIGHT)
                }
            } else if (index <= assets.length - 1 && index >= 0) {
                nextItem = ((index) * CARD_HEIGHT)
            }
            scrollTo(list, 0, nextItem, true)
            translateY.value = nextItem
        }
    });

    const handleUpPress = index => {
        if ((index + 1) == assets.length) {
            ToastAndroid.showWithGravity(
                "Can't go Down Anymore!",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            return;
        };
        const nextItem = (index + 1) * CARD_HEIGHT;
        runOnUI(scrollTo)(list, 0, nextItem, true)
        translateY.value = nextItem;
    }

    const handleDownPress = index => {
        if (index == 0) {
            ToastAndroid.showWithGravity(
                "Can't go Top Anymore!",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            return
        };
        const nextItem = (index - 1) * CARD_HEIGHT;
        runOnUI(scrollTo)(list, 0, nextItem, true)
        translateY.value = nextItem;
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
                    <Animated.ScrollView
                        decelerationRate={'fast'}
                        scrollEventThrottle={16}
                        scrollEnabled={false}
                        ref={list}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            assets.map((item, index) => (
                                <PanGestureHandler onGestureEvent={panHandler} key={index}>
                                    <Animated.View>
                                        <SwipeCard
                                            name={item.name}
                                            age={item.age}
                                            chips={item.chips}
                                            image={item.image}
                                            handleUpPress={handleUpPress.bind(null, index)}
                                            handleDownPress={handleDownPress.bind(null, index)}
                                        />
                                    </Animated.View>
                                </PanGestureHandler>
                            ))
                        }
                    </Animated.ScrollView>
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

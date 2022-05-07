import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import SearchInput from '../../../components/UI/SearchInput';
import theme, { linearGradient } from '../../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';
import RunFire from '../../../assets/images/global/runningFire.svg';
import Logo from '../../../assets/images/global/Logo.svg';
import Planet from '../../../assets/images/global/Planet.svg';
import Circular from '../../../assets/images/global/Circular.svg';
import { hP, wP } from '../../../functions/getDPFromPercent';

const matchesAssets = [
    {
        id: '1',
        name: 'JAMIE',
        fullName: 'JAMIE BROWN',
        message: 'lorem ipsum us simply dummy test of the printing',
        image: require('../../../assets/images/matches/person_1.jpg')
    },
    {
        id: '2',
        name: 'CHRISTA',
        fullName: 'CHRISTA',
        message: 'lorem ipsum us simply dummy test of the printing',
        image: require('../../../assets/images/matches/person_3.jpg')
    },
    {
        id: '3',
        name: 'DAMION',
        fullName: 'DAMION COLE',
        message: 'lorem ipsum us simply dummy test of the printing',
        image: require('../../../assets/images/matches/person_2.jpg')
    },
]

const MyMatches = props => {

    const renderMatches = ({ item }) => (
        <View style={{ padding: 8 }}>
            <Image
                style={styles.img}
                source={item.image}
                alt={item.name}
            />
            <Text style={[styles.text, { alignSelf: 'center', padding: 5, fontSize: 11 }]}>{item.name}</Text>
        </View>
    );

    const renderMessages = ({ item }) => (
        <View style={styles.message}>
            <Image
                style={styles.img}
                source={item.image}
                alt={item.name}
            />
            <View style={{ flexDirection: 'column', alignSelf: 'center', padding: 5 }}>
                <Text style={[styles.text, { alignSelf: 'flex-start', paddingVertical: 0, fontSize: 14, fontWeight: 'bold' }]}>{item.fullName}</Text>
                <Text style={[styles.text, { alignSelf: 'center', paddingTop: 4, fontSize: 12, opacity: 0.7 }]}>{item.message}</Text>
            </View>
        </View>
    );

    return (
        <>
            <LinearGradient colors={['#4B0384', '#26006F', '#0D6FCA']} style={linearGradient.style}
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

            <View style={styles.bigSun}>
                <Circular width={wP('23%')} height={hP('20%')} fill={"black"} />
            </View>
            <View style={styles.runSun}>
                <Planet width={wP('15%')} fill={"black"} />
            </View>
            <View style={styles.sun}>
                <RunFire width={wP('25%')} fill={"black"} />
            </View>



            <View style={styles.screen}>
                <View style={{ height: hP('11%'), justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={{ top: 20 }}>
                        <Logo width={wP('75%')} fill={"black"} />
                    </View>
                </View>
                <SearchInput placeholder="Search" />
                <View style={{ margin: 15 }}>
                    <Text style={[styles.text, { fontWeight: 'bold', fontSize: 16 }]}>NEW MATCHES</Text>
                    <FlatList
                        horizontal
                        data={matchesAssets}
                        renderItem={renderMatches}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <View style={styles.messageCount}>
                        <LinearGradient colors={[theme.secondary, theme.pink]} style={[linearGradient.style, { borderRadius: 50 }]} />
                        <Text style={{ color: 'white', alignSelf: 'center' }}>
                            1
                        </Text>
                    </View>
                    <View style={styles.active} />
                    <Text style={[styles.text, { fontWeight: 'bold', fontSize: 16 }]}>MESSAGES</Text>
                    <FlatList
                        data={matchesAssets}
                        renderItem={renderMessages}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </>
    );
}

export default MyMatches;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: hP('5%'),
    },
    active: {
        position: 'absolute',
        top: 50,
        left: 64,
        zIndex: 1,
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: '#00E117',
    },
    message: {
        flexDirection: 'row',
        width: wP('60%'),
        padding: 5
    },
    messageCount: {
        position: 'absolute',
        width: 17,
        height: 18,
        borderRadius: 50,
        top: 10,
        left: 105,
    },
    img: {
        borderRadius: 50,
        width: wP('20%'),
        height: wP('20%'),
    },
    text: {
        color: '#FFFFFF',
        padding: 8
    },
    bigSun: {
        bottom: '3%',
        right: '-1%',
        transform: [{ rotate: "360deg" }],
        position: 'absolute'
    },
    sun: {
        left: '3%',
        top: hP('3%'),
        position: 'absolute'
    },
    runSun: {
        top: hP('22%'),
        right: '12%',
        position: 'absolute'
    },
    icon: {
        position: 'absolute',
        right: '%',
    }
})

import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { hP, wP } from '../../../functions/getDPFromPercent';
import Up from '../../../assets/images/home/up.svg';
import Down from '../../../assets/images/home/down.svg';
import Reload from '../../../assets/images/home/reload.svg';
import Current from '../../../assets/images/home/current.svg';
import Fvrt from '../../../assets/images/home/fvrt.svg';
import Chip from '../../UI/Chip';

const SwipeCard = ({ image, chips, name, age, handleUpPress, handleDownPress }) => {
    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Image source={image} style={styles.image} resizeMode='cover' />
            </View>

            <View style={styles.firstRow}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name} numberOfLines={1}>
                        {name}
                    </Text>
                </View>
                <View style={styles.ageContainer}>
                    <Text style={styles.age} numberOfLines={1} adjustsFontSizeToFit={true}>
                        {age}
                    </Text>
                </View>
            </View>

            <View style={styles.chipContainer}>
                {chips.map(text => <Chip key={text} title={text} />)}
            </View>

            <View style={styles.lastRow}>
                <TouchableOpacity style={[styles.iconContainer, { marginBottom: 15 }]}>
                    <Reload width={'47%'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={handleDownPress}>
                    <Down width={'62%'} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconContainer, { marginBottom: 15 }]}>
                    <Fvrt width={'50%'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={handleUpPress}>
                    <Up width={'62%'} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconContainer, { marginBottom: 15 }]}>
                    <Current width={'50%'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SwipeCard;

const styles = StyleSheet.create({
    container: {
        width: wP('86%'),
        height: hP('67%'),
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        marginBottom: hP('13%')
    },
    lastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.7
    },
    iconContainer: {
        width: '20%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    chipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: 4,
        flexWrap: 'wrap'
    },
    firstRow: {
        alignItems: 'center',
        marginHorizontal: 17,
        // top: 4,
        flexDirection: 'row'
    },
    nameContainer: {
        maxWidth: '76%',
    },
    name: {
        fontSize: 28,
        fontFamily: '1',
        color: '#fff',
        letterSpacing: 0.6
    },
    ageContainer: {
        maxWidth: '24%',
        marginLeft: 10
    },
    age: {
        fontSize: 24,
        fontFamily: '7',
        color: '#fff'
    }
})

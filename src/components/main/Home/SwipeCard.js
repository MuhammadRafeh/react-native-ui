import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { hP, wP } from '../../../functions/getDPFromPercent';
import Up from '../../../assets/images/home/up.svg';
import Down from '../../../assets/images/home/down.svg';
import Reload from '../../../assets/images/home/reload.svg';
import Current from '../../../assets/images/home/current.svg';
import Fvrt from '../../../assets/images/home/fvrt.svg';
import Chip from '../../UI/Chip';

const SwipeCard = ({ image, chips }) => {
    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Image source={image} style={styles.image} resizeMode='cover' />
            </View>

            <View style={styles.chipContainer}>
                {
                    chips.map(text => <Chip key={text} title={text} />)
                }
            </View>

            <View style={styles.lastRow}>
                <TouchableOpacity style={[styles.iconContainer, { marginBottom: 15 }]}>
                    <Reload width={'47%'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Down width={'62%'} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconContainer, { marginBottom: 15 }]}>
                    <Fvrt width={'50%'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
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
        height: '85%',
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end'
    },
    lastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8
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
        marginVertical: 4,
        flexWrap: 'wrap'
    }
})

import React from 'react';

import { Text, View, Pressable, Dimensions, StyleSheet } from 'react-native'
import NavigationIcon from './NavigationIcon';
import LinearGradient from 'react-native-linear-gradient';
import { linearGradient } from '../../../constants/theme';
import MaskedView from '@react-native-masked-view/masked-view';

const { width } = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.mainContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label == "notes" ? 3 : 0 }]}>
                        <Pressable
                            onPress={onPress}
                            style={{ flex: 1, borderRadius: 20, }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <MaskedView
                                    style={{ width: width / 4, height: 20 }}
                                    maskElement={
                                        <View style={{ alignItems: 'center' }}>
                                            <NavigationIcon route={label} isFocused={isFocused} />
                                        </View>
                                    }
                                >
                                    <LinearGradient
                                        colors={[isFocused ? '#7541ED' : '#696969', isFocused ? '#D13AF7' : '#696969']}
                                        style={{ flex: 1 }}
                                    />
                                </MaskedView>
                                <View style={styles.textContainer}>
                                    <MaskedView
                                        style={{ width: width / 4, height: 20 }}
                                        maskElement={
                                            <Text style={{ fontFamily: '10', textAlign: 'center', opacity: isFocused ? 1 : 0.5, fontSize: 12.8 }}>{route.name}</Text>
                                        }
                                    >
                                        <LinearGradient
                                            colors={[isFocused ? '#7541ED' : '#696969', isFocused ? '#D13AF7' : '#696969']}
                                            style={{ flex: 1 }}
                                        />
                                    </MaskedView>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 63
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        borderRadius: 1,
        borderColor: "#333B42"
    },
    textContainer: {
        marginTop: 2
    }
})


export default TabBar;
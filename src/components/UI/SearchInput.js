import React from 'react';
import { TextInput as VanillaTextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const SearchInput = props => {
    return (
        <View style={styles.search}>
            <VanillaTextInput
                {...props}
                style={[styles.textInput, props.style]}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
            />
            <Icon name="search" style={{ alignSelf: 'center', color: 'rgba(255,255,255,0.5)' }} size={30} color="grey" />
        </View>
    );
}

export default SearchInput;

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        color: 'rgba(255,255,255,0.5)',
        marginHorizontal: 25,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'rgba(255,255,255, 0.35)',
        paddingHorizontal: 10,
        fontSize: 18,
        backgroundColor: 'rgba(255, 228, 242, 0.1)'
    },
    textInput: {
        paddingHorizontal: 10,
        width: '90%',
        color: 'white'
    }

});

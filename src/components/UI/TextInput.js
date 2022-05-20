import React from 'react';
import { TextInput as VanillaTextInput, StyleSheet } from 'react-native';

const TextInput = props => {
    return (
        <VanillaTextInput
            {...props}
            style={[styles.textInput, props.style]}
            placeholderTextColor={'rgba(255,255,255,0.5)'}
        />
    );
}

export default TextInput;

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        color: 'rgba(255,255,255,0.5)',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255,255,255, 0.35)',
        paddingLeft: 21,
        paddingTop: 15,
        paddingBottom: 18,
        paddingRight: 31,
        fontSize: 16,
        backgroundColor: 'rgba(255, 228, 242, 0.1)'
    }
});

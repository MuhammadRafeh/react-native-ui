import React from 'react';
import { TextInput as VanillaTextInput, StyleSheet, View } from 'react-native';

const TextInput = props => {
    const { value, onChangeText } = props;
    return (
        <VanillaTextInput
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
            {...props}
        />
    );
}

export default TextInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255,255,255, 0.35)',
        paddingLeft: 21,
        paddingTop: 15,
        paddingBottom: 18,
        fontSize: 16,
        backgroundColor: 'rgba(255, 228, 242, 0.1)'
    }
});

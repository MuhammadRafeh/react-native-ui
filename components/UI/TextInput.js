import React from 'react';
import { TextInput as VanillaTextInput, StyleSheet } from 'react-native';

const TextInput = props => {
    const { value, onChangeText } = props;
    return (
        <VanillaTextInput
            style={styles.container}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

export default TextInput;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255,255,255, 0.35)',
        paddingLeft: 21,
        paddingTop: 15,
        paddingBottom: 18,
        fontSize: 16
    }
});

import React from 'react';
import { View, Image } from 'react-native';
export default Circle = ({ left, top, size }) => (
    <View style={{ left, top, position: 'absolute', opacity: 0.2, backgroundColor: 'white', width: size, height: size, borderRadius: size / 2 }} />
);
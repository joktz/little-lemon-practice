import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return <View style={footerStyles.container}>
        <Text style={footerStyles.text}>
            All rights reserved by Little Lemon, 2022
        </Text>
    </View>
}

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor:'#F4CE14',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    }
})
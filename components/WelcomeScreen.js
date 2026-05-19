import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return <ScrollView indicatorStyle={'white'} style={welcomeStyles.container}>
        <Text style={welcomeStyles.headerText}>
            Welcome to Little Lemon
        </Text>
        <Text style={welcomeStyles.description}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual
            environment. We would leave to hear more about your experience with us!
        </Text>
    </ScrollView>
}

const welcomeStyles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerText: {
        textAlign: 'center',
        padding: 40,
        fontSize: 50,
        color: '#EDEFEE',
    },
    description: {
        textAlign: 'center',
        color: '#EDEFEE',
        padding: 20,
        fontSize: 20,
    }
})
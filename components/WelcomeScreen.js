import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
    return <ScrollView indicatorStyle={'white'} style={{ flex: 1}}>
        <Text style={{ textAlign: 'center',
                padding: 40,
                fontSize: 50,
                color: '#EDEFEE',
            }}>
            Welcome to Little Lemon
        </Text>
        <Text style={{ textAlign: 'center',
            color: '#EDEFEE',
            padding: 20,
            fontSize: 20,
        }}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual
            environment. We would leave to hear more about your experience with us!
        </Text>
    </ScrollView>
}
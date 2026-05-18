import * as React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
    return <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={{ textAlign: 'center',
                padding: 40,
                fontSize: 30,
                color: '#EDEFEE',
            }}>
            Welcome to Little Lemon
        </Text>
        <Text style={{ textAlign: 'center',
            color: '#EDEFEE',
            padding: 20,
        }}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual
            environment. We would leave to hear more about your experience with us!
        </Text>
    </View>
}
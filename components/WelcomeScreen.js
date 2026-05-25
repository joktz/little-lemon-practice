import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
    return <ScrollView indicatorStyle={'white'} style={welcomeStyles.container}>
        <View style={welcomeStyles.headerWrapper}>
            <Image resizemode='contain' 
                style={welcomeStyles.logo} 
                source={require('../img/LittleLemonLogo2.png')}
                accessible={true}
                accessibilityLabel='Little Lemon Logo' />
            <Text style={welcomeStyles.headerText}>
            Little Lemon
            </Text>
        </View>
        <Text style={welcomeStyles.description}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual
            environment. We would leave to hear more about your experience with us!
        </Text>
        <Image resizemode='contain' 
            style={welcomeStyles.image} 
            source={require('../img/Picture1.png')}
            accessible={true}
            accessibilityLabel='An elegant table with a folded napkin' />
        <Image resizemode='contain' 
            style={welcomeStyles.image} 
            source={require('../img/Picture2.png')}
            accessible={true}
            accessibilityLabel='A lovely fish filet being fried with a sprig of dill' />
        <Image resizemode='contain' 
            style={welcomeStyles.image} 
            source={require('../img/Picture3.png')}
            accessible={true}
            accessibilityLabel='A lemon wedge being sliced in half' />
        <Image resizemode='contain' 
            style={welcomeStyles.image} 
            source={require('../img/Picture4.png')}
            accessible={true}
            accessibilityLabel='Steamed mussles in a bowl with lemon' />
    </ScrollView>
}

const welcomeStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        marginTop: 25,
    },
    headerText: {
        fontSize: 24,
        color: '#EDEFEE',
        paddingLeft: 30,
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        color: '#EDEFEE',
        padding: 20,
        fontSize: 16,
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 20,
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    }
})
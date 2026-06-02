import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, TextInput, Pressable} from 'react-native';

export default function LoginScreen() {
    const navigation = useNavigation(); 

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    // Constant for log in capability (prevent login if password / email missing)
    const canLogin = email.length > 0 && password.length > 0;

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView keyboardDismissMode='on-drag' >
                <Text style={styles.regularText}> Welcome to Little Lemon </Text>
                    <Text style={styles.regularText}> Log in to continue </Text>
                    <TextInput 
                        value={email}
                        onChangeText={onChangeEmail}
                        placeholder='Email'
                        style={styles.input}
                        keyboardType={'email-address'}
                        clearButtonMode='always'
                    />
                    <TextInput
                        value={password}
                        onChangeText={onChangePassword}
                        placeholder='Password'
                        style={styles.input}
                        keyboardType={'default'}
                        secureTextEntry={true}
                        clearButtonMode='always'
                    />
                    <Pressable 
                        style={styles.button}
                        disabled={!canLogin}
                        onPress={() => navigation.navigate('Welcome')}>
                        <Text style={styles.buttonText}> Log in </Text>
                    </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    headerText:{
        fontSize: 40,
        padding: 40,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    }, button: {
        marginVertical: 8,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 24,
        width: 150,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 24,
        padding: 8,
        textAlign: 'center'
    },
})
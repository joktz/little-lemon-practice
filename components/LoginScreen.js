import * as React from 'react';
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';

export default function LoginScreen() {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView keyboardDismissMode='on-drag' >
                <Text style={styles.headerText}> Welcome to Little Lemon </Text>
                <Text style={styles.regularText}> Log in to continue </Text>
                <TextInput 
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder='Email'
                    style={styles.input}
                    keyboardType={'email-address'}
                />
                <TextInput
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder='Password'
                    style={styles.input}
                    keyboardType={'default'}
                    secureTextEntry={true}
                />
            </ScrollView>
        </KeyboardAvoidingView>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
})
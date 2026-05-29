import React, {useState} from 'react';
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, TextInput, Pressable} from 'react-native';

export default function LoginScreen() {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView keyboardDismissMode='on-drag' >
                <Text style={styles.regularText}> Welcome to Little Lemon </Text>
                {loggedIn ? (
                    <>
                        <Text style={styles.headerText}> You are logged in! </Text>
                    </>
                ) : (
                    <>
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
                        <Pressable style={styles.button} onPress={() => {
                            setLoggedIn(!loggedIn);
                        }}>
                            <Text style={styles.buttonText}> Log in </Text>
                        </Pressable>
                    </>
                )}
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
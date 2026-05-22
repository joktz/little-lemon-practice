import * as React from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text, KeyboardAvoidingView, Platform } from 'react-native';

export default function FeedbackForm() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');
    const [phone, onChangePhone] = React.useState('');

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView keyboardDismissMode='on-drag'>
                <Text style={styles.headingSection}>
                    How was your visit to Little Lemon?
                </Text>
                <TextInput value={firstName} onChangeText={onChangeFirstName} placeholder='First name' style={styles.input} />
                <TextInput value={lastName} onChangeText={onChangeLastName} placeholder='Last name' style={styles.input} />
                <TextInput 
                    value={phone} 
                    onChangeText={onChangePhone}
                    placeholder='Phone number'
                    keyboardType='phone-pad'
                    style={styles.input} />
                <TextInput
                    value={message} 
                    onChangeText={onChangeMessage} 
                    placeholder='Write your message here...'
                    multiline={true}
                    maxLength={250}
                    style={styles.messageInput} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
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
    headingSection: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 30,
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    }
})
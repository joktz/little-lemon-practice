import * as React from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text } from 'react-native';

export default function FeedbackForm() {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingSection}>
                How was your visit to Little Lemon?
            </Text>
            <TextInput value={firstName} onChangeText={onChangeFirstName} style={styles.input} />
            <TextInput value={lastName} onChangeText={onChangeLastName} style={styles.input} />
            <TextInput value={message} onChangeText={onChangeMessage} style={styles.input} />
        </ScrollView>
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
        backgroundColor: '#F4CE14',
    }
})
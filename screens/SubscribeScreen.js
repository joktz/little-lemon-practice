import React, {useState} from 'react';
import { View, ScrollView, Image, StyleSheet, Text, KeyboardAvoidingView, TextInput, Pressable, Alert, Platform } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Instantiate useState variables
  const [email, onChangeEmail] = React.useState('');
  const isEmailValid = Boolean(validateEmail(email));

  // Display alert regardless of web or mobile
  const subscribe = () => {
    console.log(Platform.OS);
    if (Platform.OS == 'web') {
      alert('Thanks for susbcribing, Stay tuned!');
    }

    Alert.alert(
      'Thanks for subscribing, stay tuned!',
      [{text: 'Ok'}]
    );
  }

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../img/little-lemon-logo-grey.png')} style={styles.image}/>
        <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
        <TextInput 
          value={email}
          onChangeText={onChangeEmail}
          placeholder='Enter your email here...'
          keyboardType='email-address'
          style={styles.input}
        />
        <Pressable 
          style={[
            styles.button,
            !isEmailValid && styles.buttonDisabled
          ]}
          disabled={!isEmailValid}
          onPress={() => subscribe()}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  text:{
    fontSize: 24,
    textAlign: 'center',
    marginRight: 16,
    marginLeft: 16,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#495E57',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    width: '80%',
    margin: 8,
  },
  buttonDisabled:{
    backgroundColor: '#C7C7C7',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  input:{
    width: '80%',
    height: 40,
    borderWidth: 1,
    padding: 8,
    margin: 8,
  }
})
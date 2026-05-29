import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import local components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';

//Instantiate the stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
            <LittleLemonHeader />
            <Stack.Navigator initialRouteName='Welcome' >
              <Stack.Screen 
                options= {{title: 'Home'}}
                name='Welcome'
                component={WelcomeScreen} 
              />
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Menu' component={MenuItems} />
          </Stack.Navigator>
          <View style={styles.footerContainer}>
              <Footer />
          </View>
        </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

import { StyleSheet, View, Image} from 'react-native';
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

// Logo rendering
function LogoTitle() {
  return (
    <Image source={require('./img/LittleLemonSmallLogo.png')}
      style={{
        height: 40,
        width: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
      }} 
    />
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
            <Stack.Navigator 
              initialRouteName='Login'
              screenOptions={{
                headerStyle: { backgroundColor: '#EE9972',},
                headerTitle: () => <LogoTitle />,
                headerTitleAlign: 'center',
              }}
            >
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
  },
  footerContainer: { backgroundColor: '#333333' },
});

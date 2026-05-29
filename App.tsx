import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Import local components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
      <NavigationContainer>
          <View style={styles.container}>
            <LittleLemonHeader />
            <WelcomeScreen />
            {/* <LoginScreen /> */}
            {/* <FeedbackForm /> */}
            {/* <MenuItems /> */}
            <View>
              <Footer />
            </View>
        </View>
      </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#333333'
  },
});

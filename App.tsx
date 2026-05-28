import { StyleSheet, Text, View, useWindowDimensions} from 'react-native';

// Import local components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';

export default function App() {
  const {width, height, fontScale} = useWindowDimensions();
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#333333'
  },
});

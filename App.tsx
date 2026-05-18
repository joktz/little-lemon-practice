import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import local components
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/footer';

export default function App() {
  return (
      <View style={styles.container}>
        <LittleLemonHeader />
        <View>
          <Footer />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    justifyContent: 'space-between',
  },
});

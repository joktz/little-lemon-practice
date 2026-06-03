import { StyleSheet, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Starter code (module 5) imports
import RootNavigator from './navigators/RootNavigator';


export default function App() {
  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );
}

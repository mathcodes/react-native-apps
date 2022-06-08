
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <CategoriesScreen />
    </>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#55fff5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

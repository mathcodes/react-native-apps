import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen'; 

export default function App() {
  return (
    <LinearGradient colors={['#ddbf43', '#d35400']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/faviconSM_100.png')} resizeMode="repeat" style={styles.rootScreen} >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: { 
    flex: 1
  },
  startGame: {
  
  }
});

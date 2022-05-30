import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen'; 
import GameScreen from './screens/GameScreen'; 

export default function App() {
  const [userNumber, setUserNumber] = useState(); 

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  // if number is truthy, a valid number, then we make it into if block and 
  if (userNumber) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={['#ddbf43', '#d35400']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/faviconSM_100.png')} resizeMode="repeat" style={styles.rootScreen} >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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

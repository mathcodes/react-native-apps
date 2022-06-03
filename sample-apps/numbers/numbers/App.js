import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen'; 
import GameScreen from './screens/GameScreen'; 
import Colors from './constants/colors';
export default function App() {
  const [userNumber, setUserNumber] = useState(); 

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
// Create variable that is set to StartGameScreen component but changes based on the following if block
// in order for 'pickedNumberHandler' to run, we can pass in a handler as props to call the function. REMEMBER TO CALL THE HANDLER USING OBJECT DESCTRUCTURING IN THE StartGameScreen Component *^*
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  // if number is truthy, a valid number, then we make it into if block and 
  if (userNumber) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/faviconSM_100.png')} resizeMode="repeat" style={styles.rootScreen} >
        {/* AND NOW WE RENDER THE SCREEN THROUGH THE 'screen' variable */}
        {/* SafeAreaView automatically detects whether or not the device has a notch a the top of the screen */}
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

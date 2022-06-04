import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen'; 
import GameOverScreen from './screens/GameOverScreen'; 
import GameScreen from './screens/GameScreen'; 
import Colors from './constants/colors';
export default function App() {
  const [userNumber, setUserNumber] = useState(); 
  const [ gameIsOver, setGameIsOver ] =  useState(true);
  const [ guessRounds, setGuessRounds ] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
// Create variable that is set to StartGameScreen component but changes based on the following if block
// in order for 'pickedNumberHandler' to run, we can pass in a handler as props to call the function. REMEMBER TO CALL THE HANDLER USING OBJECT DESCTRUCTURING IN THE StartGameScreen Component *^*
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  // if number is truthy, a valid number, then we make it into if block and 
  if (userNumber) {
    screen = 
    // OVERVIEW2 (*)  So in GameScreen*^*
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>;
  }

  // OVERVIEW: And now we just need to make sure that this parameter, 'numberOfRounds', is passed into gameOverHandler. So into the onGameOver prop from inside GameScreen. (*) 
  // #&#
  function gameOverHandler(numberOfRounds){
    screen =  setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    // resetting the game settings for new round
    setUserNumber(null);
    setGuessRounds(0);

  }

  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/bg.jpg')} resizeMode="" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
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
  backgroundImage: {
    opacity: 0.3
  }
});

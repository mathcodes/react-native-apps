import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, useWindowDimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
// ^^^
function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      // *^* So in GameScreen, where we do call this onGameOver function here, we wanna pass the guessRounds length as an argument because that's the number of items in this guess rounds array. And that is the number of rounds It took the device to guess our number we're passing this into the function which we receive through that onGameOver prop ^^^. And that turns out to be that gameOverHandler function in App.js #&#
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  // in order for the values for min/maxBoundary to reset when we restart game, we have to setup this useEffect hook and passing in the empty array. In this case, it only runs when component is on ui, then off then on, but NOT each time component is updated (new guess made). 
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  // LANDSCAPE OVERHAUL STEP 1: HOW TO CREATE A LAYOUT OPTIMIZED FOR MORE WIDTH (LANDSCAPE)
  // let content = <NumberContainer>{currentGuess}</NumberContainer>
  //      ...
  //   </View>
  // </Card>
  let content = (
    <>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
        </View>
      </Card>
    </>
  )

  if (width > 490) {
    content = (
      <>
        <Card>
          <View style={styles.buttonsContainerWide}>
            <View style={styles.buttonContainer}>

              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
            </View>

            <NumberContainer style={styles.numCont}>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="md-add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </>
    )
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  numCont: {
    width: '80%'
  },
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonsContainerWide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
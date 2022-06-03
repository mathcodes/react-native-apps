import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
// *^* automatically pull out the onPickNumber from the props object using object destructuring here, then call is whenever a number is picked and confirmed, in the onfirmInputHandler function below >*>
export default function StartGameScreen({onPickNumber}) {
  
  // Now with bind this to the TextInput, I mean that I wanna set the value prop on TextInput and set this equal to enteredNumber. I do this so that we can change the state from anywhere in this app.
  const [enteredNumber, setEnteredNumber] = useState('');

  // But of course, we also wanna update this `enteredNumber` state whenever the user types into the `TextInput` field. And for this, we can add a function, the `numberInputHandler`, for example, which should be executed upon every keystroke which can be achieved by adding the `onChangeText` prop here to this TextInput. And then we point at this numberInputHandler and this will in the end execute this function on every keystroke that is done on this TextInput.

  // NOTE: parameter `enteredText`: we automatically get a value for this parameter because React Native will invoke this function for us for every keystroke on the TextInput.  
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }
// Here we check the current state and make sure its good to go
  function confirmInputHandler() {
    // here we convert the string to a number
    const chosenNumber = parseInt(enteredNumber);
    // handle errors:
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert, accepts title, message,buttons 
      Alert.alert(
        'Invalid Title', 
        'Number has to be between 1 and 99.', 
        // buttons are defined as object with text and style and optional onPress property to call a function when clicked
        [{ text: 'Okay', style:'destructive', 
        onPress: resetInputHandler}]
        );
      return;
    }
    // >*> execture onPickNumber and forward the number that has been picked
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        // with onChangeText we execute this function, numberInputHandler
        onChangeText={numberInputHandler}
        // when the Reset button is clicked to reset it to an empty string and such state changes are then reflected in TextInput. That's why I'm setting the value prop to the state. We do this so we CAN change the state
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer} >
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>      
          <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius :7,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4, //android 
    shadowColor: '#000', //ios ...
    shadowOffset: {width: 3, height: 6},
    shadowRadius: 7,
    shadowOpacity: 1 // ... ios
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})

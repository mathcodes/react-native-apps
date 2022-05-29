
import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
// Goal input JS because there we store the data input related JSX code and functionality.

function GoalInput (props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  // create handler function that controls the user input as it is typed
  // When text is received,this goalInputHandler function receives 
  // the entered value automatically because its React Native that calls this 
  // function and exposes this prop.
  // React Native, will also provide us a value as a input as a parameter 
  // to this function and that will be the enteredText. 
  // So we get the enteredText automatically.
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };
  // add function to call onAddGoal function to MANUALLY pass the enteredGoalText
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    // clears every time we add a new goal
    setEnteredGoalText('');
  };
    return (
      // when setting the visible prop to props.visible, remember to set this prop on GoalInput in the App Component-*-
      <Modal visible={props.visible} animationType="slide"> 
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/diary.png')} />
          <TextInput 
            style={styles.textInput} 
            placeholder="Your Goal!!!" 
            onChangeText={goalInputHandler}
            // we should add a value prop to TextInput, // and bind this to the enteredGoalText. // So that whenever this goal text changes, // because we for example, reset it, // this is reflected in the TextInput.
          value={enteredGoalText}
          />
          {/* COMMON PROBLEM: we are using and controlling state with functions in App.js. So we need to talk to the parent component by passing event handler functions via props. So here, for example, we can accept props on GoalInput:
          'function GoalInput (props) {'


  and expect a special prop which could be named, onAddGoal, to be provided by the parent component, which actually holds a function as a value that will be executed upon a press. */}
          <View style={styles.buttonContainer}>
             <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel}/>
            </View>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
          </View>
          
        </View>
      </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#841584'
  },
  image: {
    width: 192,
    height: 132.5,
    margin: 20,

  },
  textInput: {
    borderWidth: 3,
    borderColor: '#d35400',
    backgroundColor: '#e4dfff',
    width: '100%',
    padding: 8,
    borderRadius: 10,
    color: 'black'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button:{
    width: "40%",
    marginHorizontal: 8
  }
});
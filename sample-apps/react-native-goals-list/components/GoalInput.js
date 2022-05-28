
import { useState } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
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
      <View style={styles.inputContainer}>
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
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#d35400'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d35400',
    width: '65%',
    marginRight: 8,
    padding: 8
  }
});
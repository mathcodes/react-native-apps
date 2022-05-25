import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
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

  // and another handler to fire when the button is clicked

  // Now we want the value entered in the TextInput in this `addGoalHandler` function. So what we need to do is we need to store it as state, which is updated with every keystroke in the `goalInputHandler` function so that we can then use it in the `addGoalHandler` function.
  function addGoalHandler(value) {
    // We COULD use the spread operator like so:
 // setCourseGoals([...courseGoals, enteredGoalText]);
    // BUT when your state relies on previous state, passing a function to the state-changing function to derive the new state as it automatically receives the current state by React :)
    // So now we're updating this course goal state based on the old course goals by appending a new goal.
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  };
  // We will use event listening props provided by react native on its components, such as:
  // onChangeText prop which takes in a pointer to a function 
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your Goal!!!" 
          onChangeText={goalInputHandler} i
        />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {/* adding something dynamic using curly braces: */}
        {/* when outputting a list of data, as we're doing it here, every item in that list should receive a key prop which uniquely identifies the individual list item. Under the hood this helps React update the list in an efficient way, so to say. */}
        {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  },
  goalsContainer: {
    flex: 6
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'teal'
  },
  goalText: {
    color: 'white'
  }
});

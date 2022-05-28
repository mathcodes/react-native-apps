import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]); 
  const [modalIsVisible, setModalIsVisible] = useState(false); 
  // So we should provide a function to "onPress" and since I plan on deleting items in the future, I will define this function in App.js, because here, I'm managing my "courseGoals" state, and here, I will have to delete items in the future.

    function startAddGoalHandler () {
      setModalIsVisible(true);
    }

    function deleteGoalHandler(id){
      setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter((goal) => goal.id !== id);
      });
    } // now we use a pointer in the GoalInput component below to pass the deleteGoalHandler as a value to the onDeleteItem prop 
  // and another handler to fire when the button is clicked

  // Now we want the value entered in the TextInput in this `addGoalHandler` function. So what we need to do is we need to store it as state, which is updated with every keystroke in the `goalInputHandler` function so that we can then use it in the `addGoalHandler` function.
  function addGoalHandler(enteredGoalText) {
    // We COULD use the spread operator like so:
 // setCourseGoals([...courseGoals, enteredGoalText]);
    // BUT when your state relies on previous state, passing a function to the state-changing function to derive the new state as it automatically receives the current state by React :)
    // So now we're updating this course goal state based on the old course goals by appending a new goal.
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
// Turning our items into objects with keys but changing `enteredGoalText` into just that:
// After making our components, the problem is that this enteredGoalText is eventually needed in the App component, when 
// we add a new goal. and therefore we also need to make sure that this data arrives here in addGoalHandler. { text: 
// enteredGoalText, key: Math.random().toString() },
//  SOLUTION : The easiest way of ensuring this would be to expect the enteredGoalText as a parameter:
//    function addGoalHandler(enteredGoalText) {


  // We will use event listening props provided by react native on its components, such as:
  // onChangeText prop which takes in a pointer to a function 

  // For button should control modal visibility so we need STATE
  // add a new piece of state: modalIsVisible ...
  return (
    <View style={styles.appContainer}>
      {/* ADD BUTTON TO OPEN MODAL */}
    <Button title='Add New Goal' color="#d35400" onPress={startAddGoalHandler}   />
    {/* Alter GoalInput to make it conditional:
        - add curly braces
        - check modalIsVisible state 
        - if its true we render GoalInput which internally contains the modal */}
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text}
                // here the id prop is set on GoalItem with the value of itemData.item.id
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )
          }}
          // called to get a key out of every item which will be attached to the item by the flatlist
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} 
        />
        {/* NOTE: And under the hood, only the items that are needed are being rendered and the other items will be loaded lazily as we scroll closer to them. That's how this FlatList works now. */}
        {/* // NOTE: alternative to setting up such a key property in the input data. */}
        {/* add the keyExtractor prop to the FlatList with a function that takes two parameters, item and index */}
        {/* adding something dynamic using curly braces: */}
        {/* when outputting a list of data, as we're doing it here, every item in that list should receive a key prop which uniquely identifies the individual list item. Under the hood this helps React update the list in an efficient way, so to say. */}
        {/* {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))} */}
        {/* </Flatlist> */}
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
  goalsContainer: {
    flex: 6
  }
});

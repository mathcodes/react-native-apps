//-note- store the actual JSX code and functionality that is related without putting single goal items.

import {StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem (props) {
  return(
    // bind method allows us to preoncfigure a function for future execution. the first value is 'this', second arg is first parameter received by the to-be-called function
    // set this to props.id so that the id from the props on this component is sent as a parametner value to cue the function that we receieve on onDeleteItem prop, which is the deleteGoalHandler function in App.js.
    //-note- SO WE NEED TO MAKE Sure we get an ID prop on the GoalItem component (in App.js)
    <Pressable 
      android_ripple={{ color: '#d34500' }} //android ripple effect is only available on android 
      onPress={props.onDeleteItem.bind(this, props.id)} // bind is a method that allows us to preoncfigure a function for future execution. the first value is 'this', second arg is first parameter received by the to-be-called function 
      //  => check pressed and if its true we return styles.pressedItem (otherwise we return no style) 
      style = {({pressed}) => pressed && styles.pressedItem} // here we use a custom style to allow iOS to change its state when the item is pressed.
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>
          {/* // make sure that when we access the data of a single item, we access the text property since each item is an object with a text property as we setup above, we dive into the text */}
          {props.text}
        </Text>
      </View>
    </Pressable>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    paddingTop: 28,
    paddingBottom: 28,
    borderRadius: 6,
    backgroundColor: 'teal'
  },
  pressedItem: {
    opacity: 0.5,
    border: 1,
    borderColor: '#000'
  },
  goalText: {
    color: 'white'
  }
});
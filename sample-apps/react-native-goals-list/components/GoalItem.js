//-note- store the actual JSX code and functionality that is related without putting single goal items.

import {StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem (props) {
  return(
    <Pressable onPress={props.onDeleteItem}>
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
    borderRadius: 6,
    backgroundColor: 'teal'
  },
  goalText: {
    color: 'white'
  }
});
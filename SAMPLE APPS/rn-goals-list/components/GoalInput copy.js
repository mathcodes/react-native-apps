
import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';

function GoalInput (props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };
    return (
      <Modal visible={props.visible} animationType="slide"> 
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/diary.png')} />
          <TextInput 
            style={styles.textInput} 
            placeholder="Your Goal!!!" 
            onChangeText={goalInputHandler}
          value={enteredGoalText}
          />
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
import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: '#d35400',
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
    borderBottomColor: '#ddbf43',
    borderBottomWidth: 2,
    color: '#ddbf43',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

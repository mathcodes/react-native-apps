import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


export default function PrimaryButton({children}) {

  function pressHandler() {
    console.log('pressed')
  }
  return (
    <Pressable onPress={pressHandler} android_ripple={{color: '#000'}}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

let styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#345507',
    borderRadius: 28,
    paddingVertical: 8, 
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
})
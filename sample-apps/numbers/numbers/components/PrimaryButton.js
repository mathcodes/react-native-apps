import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


export default function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
      // style prop can also take a function which is automatically called by react when pressable is pressed
      //  'pressed' is a react native property which part of the object and passed into the arrow function 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
        onPress={onPress} 
        android_ripple={{ color: '#000' }}
      >
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>

  );
}

let styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: '#345507',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})
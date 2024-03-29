import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';


const Button = (props) => {

  const { content, type, onPress } = props;

  const bgColor = type === 'primary' 
    ? '#171A20CC' 
      : '#FFFFFFA6';

  const txtColor = type === 'primary' 
    ? '#FFFFFF' 
      : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {bgColor: bgColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: txtColor}]}>
          {content} H
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  }
});
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function MyKeyboard() {


  return (
    <View style={Styles.viewBottom}>
     <Text>Keyboard Component</Text>
    </View>
  );
}

export const Styles = StyleSheet.create({
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    }
})
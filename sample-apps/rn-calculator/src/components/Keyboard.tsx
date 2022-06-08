import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default function MyKeyboard() {


  return (
    <View style={Styles.viewBottom}>
    <View
      style={{
        alignSelf: "center",
        justifyContent: "flex-end",
        height: 100,
        width: "100%",
      }}
    >
      
        <Text style={{ color: "gray", width: "80%", fontSize: 20, fontWeight: '900' }}>😎</Text>
      
    </View>
    <View>
      <Button title="b1"/>
      <Button title="b2"/>
      <Button title="b3"/>
      <Button title="b4"/>
    </View>
   
  </View>
  );
}

export const Styles = StyleSheet.create({
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    }
})
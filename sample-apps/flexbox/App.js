import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "#3b021f" }} />
      <View style={{ flex: 1, backgroundColor: "#640233" }} />
      <View style={{ flex: 2, backgroundColor: "#007aff" }} />
      <View style={{ flex: 3, backgroundColor: "#841584" }} />
      <View style={{ flex: 5, backgroundColor: "#f194ff" }} />
      <View style={{ flex: 8, backgroundColor: "#ecf0f1" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;

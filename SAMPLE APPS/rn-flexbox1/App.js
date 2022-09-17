import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "#a92ca2" }} />
      <View style={styles.line} />
      <View style={{ flex: 1, backgroundColor: "#135d66" }} />
      <View style={styles.line} />
      <View style={{ flex: 2, backgroundColor: "#4faeba" }} />
      <View style={styles.line} />
      <View style={{ flex: 3, backgroundColor: "#841584" }} />
      <View style={{ flex: .1, backgroundColor: "#212121" }} />
      <View style={{ flex: 1, backgroundColor: "#a92ca2" }} />
      <View style={{ flex: .1, backgroundColor: "#212121" }} />
      <View style={{ flex: 8, backgroundColor: "#4faeba" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    border: "1px solid #212121ow to "
  },
  line: {
    backgroundColor: "#212121",
    flex: 0.1,
  }
});

export default Flex;

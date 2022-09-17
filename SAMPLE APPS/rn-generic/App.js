import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  const onReset = () => setCount(0);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          Count: {count || null}
        </Text>
      </View>
      <TouchableHighlight onPress={onReset}>
        <View style={styles.button2}>
          <Text>Reset</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4faeba",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderWidth: 5,
    borderColor: 'black'
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#30757d",
    padding: 10,
    borderWidth: 5,
    borderColor: 'black'
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF",
    fontSize: 55
  }
});

export default TouchableHighlightExample;
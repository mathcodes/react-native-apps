import { View, Text, StyleSheet,  } from 'react-native';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>

      <View>
        <Text >Higher of Lower?</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 2,
    padding: 24
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b021f',
    textAlign: 'center'
  }
})
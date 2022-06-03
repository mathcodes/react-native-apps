import { View, Text, StyleSheet,  } from 'react-native';

import Title from '../components/Title';
// This screen shows up when we guess a number
export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text >Higher of Lower?</Text>

      </View>
      <View>
        {/* LOG ROUNDS */}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 2,
    padding: 24
  }
})
import { StyleSheet, Text, View, Button, Separator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>J</Text>
      </View>
      <Separator />
      <View>
        <Text style={styles.text}>This is just some text</Text>
        
        <Text style={{ color: 'black', backgroundColor: '#d35400', borderColor: 'black', borderWidth: 5, padding: 12, margin: 12, }}>This is just some text</Text>
         
        <Button
          // onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Purple button"
        />
      </View>
    </View>
  );
}

// React Native StyleSheet Object:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    backgroundColor: '#d35400',
    borderColor: 'black',
    borderWidth: 5,
    padding: 12,
    margin: 12,
  }
});

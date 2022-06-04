import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {
  return <View style={styles.title}><Text style={styles.text}>{children}</Text></View>;
}

export default Title;

const styles = StyleSheet.create({
  title: { 
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    borderRadius: 15,
    color: Colors.primary500,
    backgroundColor: Colors.primary800,
  },
  text: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
    backgroundColor: Colors.primary800,
    textAlign: 'center',
  }
});

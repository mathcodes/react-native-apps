import { Text } from 'react-native';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <Text>App.jsx running</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

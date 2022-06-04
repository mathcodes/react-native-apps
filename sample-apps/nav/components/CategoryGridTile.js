import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({title, color}) {
  return (
    <View style={styles.gridItem} >
      {/* NOTICE THE STYLE WHICH CALL A FUNCTION THAT RENDERS STYLES CONDITIONALLY */}
      <Pressable 
        android_ripple={{color: '#9eca54'}} 
        style={({pressed})=> [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    // flex: 1,
    margin: 16,
    height: 150,
    width: 150,
    borderRadius: 8,
    elevation: 9,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {width:0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor: '#9eca54',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
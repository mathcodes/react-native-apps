import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image 
        source={require('../assets/favicon.png')} 
        style={styles.logo} />
      <Image 
        source={require('../assets/favicon.png')} 
        style={styles.menu} />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }
});
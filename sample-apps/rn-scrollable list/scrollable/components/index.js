import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import GuitarItem from "../GuitarItem";
import guitars from './guitars';

const GuitarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={guitars}
        renderItem={({item}) => <GuitarItem guitar={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default GuitarList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
});
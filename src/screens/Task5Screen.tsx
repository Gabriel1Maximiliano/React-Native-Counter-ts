import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Task5Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.coralBox}></View>
      <View style={styles.orangeBox}></View>
      <View style={styles.purpleBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  purpleBox: {
    backgroundColor: '#9839E3',
    borderColor: 'red',
    borderWidth: 5,
    height: 'auto',
    width: 100,
  },
  orangeBox: {
    backgroundColor: '#E3AF39',
    borderColor: 'white',
    borderWidth: 5,
    height: 'auto',
    width: 100,
  },
  coralBox: {
    backgroundColor: 'coral',
    borderColor: 'white',
    borderWidth: 5,
    height: 'auto',
    width: 100,
  },
});

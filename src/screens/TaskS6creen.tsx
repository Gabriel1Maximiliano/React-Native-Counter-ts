import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const Task6Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>
      <View style={styles.coralBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'column',
  },
  purpleBox: {
    backgroundColor: '#9839E3',
    borderColor: 'white',
    borderWidth: 5,
    flex: 1,
    width: 'auto',
  },
  orangeBox: {
    backgroundColor: '#E3AF39',
    borderColor: 'white',
    borderWidth: 5,
    flex: 1,

    width: 'auto',
  },
  coralBox: {
    backgroundColor: 'coral',
    borderColor: 'white',
    borderWidth: 5,
    flex: 2,
    width: 'auto',
  },
});

import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export const FlexScreen = () => {

  return (
    <View style={ styles.container } >
        <Text style={ styles.box1 }>Box 1</Text>
        <Text style={ styles.box2 }>Box 2</Text>
        <Text style={ styles.box3 }>Box 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor:'coral',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end'   
    },
    box1:{
        fontSize:45,
        backgroundColor:'blue',
      
    },
    box2:{
        fontSize:45,
     
        backgroundColor:'purple'
    },
    box3:{
        fontSize:45,
      
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'green'
    },
});

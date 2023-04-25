import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={  styles.container } >
        <Text style={ styles.title } >CLick Me!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{ 
      borderWidth:3,
      padding:3,
      backgroundColor:'#F5F0F0',
      borderTopLeftRadius:20,
      borderBottomRightRadius:20,
      
    },
    title:{
     
      padding:8,
      borderWidth:5,
     
      backgroundColor:'yellow',
      borderRadius:15,
      textAlign:'center',
      color:'purple',
      fontSize:35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }
})

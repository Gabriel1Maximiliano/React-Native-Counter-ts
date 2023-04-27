import React from 'react'
import { View,StyleSheet,Text } from 'react-native'

export const Task9Screen = () => {
  return (
    <View style={ styles.container } >
      <View style={{justifyContent:'center'}}>
        <View style={ styles.coralBox }  ></View>
        <View style={ styles.purpleBox } ></View>
        <View style={ styles.orangeBox } ></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
        
    },
    purpleBox:{
        backgroundColor:'#9839E3',
        borderColor:'white',
        borderWidth:5,
        height:100,
        width:100,
     },
     orangeBox:{
        backgroundColor:'#E3AF39',
        borderColor:'white',
        borderWidth:5,
        height:100,
        width:100,
     },
     coralBox:{
        backgroundColor:'coral',
        borderColor:'white',
        borderWidth:5,
        bottom:-100,
        height:100,
        left:100,
        width:100,
     },


});
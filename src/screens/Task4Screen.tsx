import React from 'react'
import { View,StyleSheet,Text } from 'react-native'

export const Task4Screen = () => {
  return (
    <View style={ styles.container } >
      <View style={ {flex:1,justifyContent:'center',alignSelf:'center' } } > 

      <View style={ styles.coralBox }  ></View>
      </View>
        <View style={ styles.orangeBox } ></View>
        <View style={ styles.purpleBox } ></View>
      
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',
        flex:1,
        justifyContent:'space-between',
        position:'relative'
       
    },
    purpleBox:{
   
position:'absolute',

    right:0,
      
        backgroundColor:'#9839E3',
        borderColor:'white',
        borderWidth:5,
        height:100,
        width:100,
     },
     orangeBox:{
     position:'relative',

        backgroundColor:'#E3AF39',
        borderColor:'white',
        borderWidth:5,
        height:100,
        width:100,
     },
     coralBox:{
      bottom:-50,
        backgroundColor:'coral',
        borderColor:'white',
        borderWidth:5,
        height:100,
        width:100,
     },


});
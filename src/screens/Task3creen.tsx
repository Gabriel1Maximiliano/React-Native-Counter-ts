import React from 'react'
import { View,StyleSheet,Text } from 'react-native'

export const Task3Screen = () => {
  return (
    <View style={ styles.container } >
   
 <View style={ {flexDirection:'row',justifyContent:'space-between',position:'relative'} } >
        <View style={ styles.coralBox }  ></View>
        <View style={ styles.orangeBox } ></View>
        <View style={ styles.purpleBox } ></View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
      
        },
    purpleBox:{
     top:-100,
        backgroundColor:'#9839E3',
        borderColor:'white',
        borderWidth:5,
        height:100,
        width:100,
      
       

     },
     orangeBox:{
      bottom:-100,
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
        height:100,
        width:100,
     },


});
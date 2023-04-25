import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export const DimensionsScreen = () => {

    const { height,width } =useWindowDimensions();

  return (
    <View style={ styles.container }>
        <View style={ styles.purpleBox } ></View>
        <View style={ styles.orangeBox } ></View>  
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:600,
        backgroundColor:'red'
    },
    purpleBox:{
       width:'50%',
       height:'50%',
        backgroundColor:'#9839E3'
    },
    orangeBox:{
        backgroundColor:'#E3AF39'
    },
    title:{
        fontSize:25
    }
});
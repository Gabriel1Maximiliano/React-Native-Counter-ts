import React, { useState } from 'react'
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native'

export const CounterScreen = () => {

    const [ counter, setCounter ] = useState<number>( 0 );

  return (
    <View style={ styles.container } >
        <Text style={styles.title} > Counter :
                 { counter }
        </Text>
        <TouchableOpacity 
        style={ styles.floatingActionButtonButtonRight }
        onPress={ () => setCounter(  counter - 1 ) }>
            <View style={styles.floatingActionButton} >
                <Text style={ styles.floatingActionButtonTitle } >+1</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        style={ styles.floatingActionButtonButtonLeft }
        onPress={ () => setCounter(  counter - 1 ) }>
            <View style={styles.floatingActionButton} >
                <Text style={ styles.floatingActionButtonTitle } >-1</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center'
    },
    title:{
        textAlign:'center',
        fontSize:45,

    },
    floatingActionButtonButtonRight:{
        position:'absolute',
        bottom:25,
        right:25
    },
    floatingActionButtonButtonLeft:{
        position:'absolute',
        bottom:25,
        left:25
    },
    
    floatingActionButton:{
        color:'#5858d6',
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'red',
        justifyContent:'center'

    },
    floatingActionButtonTitle:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center',
    }
})
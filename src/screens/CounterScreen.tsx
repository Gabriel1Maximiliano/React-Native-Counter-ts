import React, { useState } from 'react'
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import { FloatingActionButton } from '../components/FloatingActionButton';

export const CounterScreen = () => {

    const [ counter, setCounter ] = useState<number>( 0 );

  return (
    <View style={ styles.container } >
        <Text style={styles.title} > Counter :
                 { counter }
        </Text>
        <FloatingActionButton 
        title='-1'
        onPress={ () => setCounter( counter - 1 ) }
        position='left'
        />
        <FloatingActionButton 
        title='+1'
        onPress={ () => setCounter( counter + 1 ) }
        position='right'
        />
        {/* <TouchableOpacity 
        style={ styles.floatingActionButtonButtonLeft }
        onPress={ () => setCounter(  counter - 1 ) }>
            <View style={styles.floatingActionButton} >
                <Text style={ styles.floatingActionButtonTitle } >-1</Text>
            </View>
        </TouchableOpacity> */}
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
   
})
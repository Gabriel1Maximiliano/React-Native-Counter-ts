import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export interface IProps {
    title:string;
    position?:ButtonPosition;
    onPress: () => void;
}

export type ButtonPosition = | 'left' | 'right'

export const FloatingActionButton = ( { title, onPress, position='left' } : IProps ) => {

  return (
    <>
    <TouchableOpacity 
        style={ [styles.floatingActionButtonButton, ( position === 'left' ) ? styles.Left : styles.Right] }
        onPress={ onPress }>
            <View style={styles.floatingActionButton} >
                <Text style={ styles.floatingActionButtonTitle } >{ title }</Text>
            </View>
        </TouchableOpacity>

    </>
  )
}

const styles = StyleSheet.create({
    floatingActionButtonButton:{
        position:'absolute',
        bottom:25,
        right:25
    },
    Left:{
        left:25
    },
    Right:{
        right:25
    },
    
    floatingActionButton:{
        color:'#5858d6',
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'red',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    floatingActionButtonTitle:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center',
    }
})
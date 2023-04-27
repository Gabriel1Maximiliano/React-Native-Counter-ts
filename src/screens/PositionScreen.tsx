import { StyleSheet, Text, View } from "react-native";


export const PositionScreen = () => {

  return (

    <View style={  styles.container  } >
       <View style={  styles.purpleBox  } ></View>
       <View style={  styles.orangeBox  } ></View>
    </View>

  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#39D9E3',
        
    },
    purpleBox:{
        position:"absolute",
        backgroundColor:'purple',
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        right:0,
        bottom:0
     
    },
    orangeBox:{
        backgroundColor:'#E3AD39',
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'red',
        position:"absolute",
        bottom:0,
        left:0
        
     
     
    }
});

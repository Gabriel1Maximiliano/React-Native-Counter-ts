import React from 'react';
import { SafeAreaView, Text,View } from 'react-native';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { PositionScreen } from './src/screens/PositionScreen';









const App = () => {
  return (
    <SafeAreaView  style={ { flex:1 } } >
{/* <BoxObjectModelScreen /> */}
 <PositionScreen />
    </SafeAreaView>
/* <CounterScreen /> */
  )
}

export default App
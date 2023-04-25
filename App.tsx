import React from 'react';
import { SafeAreaView, Text,View } from 'react-native';
import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';









const App = () => {
  return (
    <SafeAreaView   >
{/* <BoxObjectModelScreen /> */}
 <DimensionsScreen />
    </SafeAreaView>
/* <CounterScreen /> */
  )
}

export default App
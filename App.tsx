import React from 'react';
import { SafeAreaView, Text,View } from 'react-native';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TaskScreen } from './src/screens/TaskScreen';
import { Task1Screen } from './src/screens/Task1Screen';
import { Task2Screen } from './src/screens/Task2Screen';












const App = () => {
  return (
    <SafeAreaView  style={ { flex:1 } } >
{/* <BoxObjectModelScreen /> */}
 {/* <Task1Screen /> */}
 <Task2Screen />
    </SafeAreaView>
/* <CounterScreen /> */
  )
}

export default App
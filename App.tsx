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
import { Task3Screen } from './src/screens/Task3creen';
import { Task4Screen } from './src/screens/Task4Screen';
import { Task5Screen } from './src/screens/Task5Screen';
import { Task6Screen } from './src/screens/TaskS6creen';












const App = () => {
  return (
    <SafeAreaView  style={ { flex:1 } } >
{/* <BoxObjectModelScreen /> */}
 {/* <Task1Screen /> */}
 {/* <Task2Screen /> */}
 {/* <Task3Screen /> */}
 {/* <Task4Screen /> */}
 {/* <Task5Screen /> */}
 <Task6Screen />
    </SafeAreaView>
/* <CounterScreen /> */
  )
}

export default App
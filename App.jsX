import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';

function App() {
  return (
    <>
      <SafeAreaView>
        <HomeScreen />
        <Text>hELLP</Text>
      </SafeAreaView>
    </>
  );
}

export default App;
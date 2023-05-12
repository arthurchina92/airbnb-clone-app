import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResults from './src/screens/Search/index';
import DestinationSearch from './src/screens/DestinationSearch.js';
import GuestsScreen from './src/screens/Guests';
import feed from './assets/data/feed';
import {nativeViewGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import Router from './src/navigation/router';

const post1 = feed[0];

function App(props) {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
    </>
  );
}

export default App;

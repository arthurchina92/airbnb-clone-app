import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResults from './src/screens/Search/index';
import DestinationSearch from './src/screens/DestinationSearch.js';
import feed from './assets/data/feed';

const post1 = feed[0];

function App(props) {
  return (
    <>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResults /> */}
        <DestinationSearch />
      </SafeAreaView>
    </>
  );
}

export default App;

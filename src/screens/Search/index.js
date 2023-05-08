import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';

export default function SearchResults(props) {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}

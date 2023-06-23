import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const SuggestionRow = ({item}) => (
  <View style={styles.rowContainer}>
    <View style={styles.iconContainer}>
      <Entypo name={'location-pin'} size={25} />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
);

export default SuggestionRow;

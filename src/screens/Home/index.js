import {View, Text, ImageBackground, Pressable, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import imageBg from '../../../assets/images/wallpaper.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import DestinationSearch from '../DestinationSearch.js';

export default function HomeScreen(props) {
  const navigation = useNavigation();

  console.log('This is home screen');
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination')}>
        <Fontisto name="search" size={25} color={'red'} />
        <Text
          style={styles.textInput}
          placeholder="Where are you going?"
          placeholderTextColor={'#000000'}>
          {' '}
          Where are you going?
        </Text>
      </Pressable>
      <ImageBackground source={imageBg} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Button clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

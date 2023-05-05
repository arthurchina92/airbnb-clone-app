import {View, Text, ImageBackground, Pressable, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import imageBg from '../../../assets/images/wallpaper.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function HomeScreen(props) {
  console.log('This is home screen');
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Button clicked')}>
        <Fontisto
          name="search"
          size={25}
          color={'red'}
          style={{marginLeft: 15}}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Where are you going?"
          placeholderTextColor={'#000000'}
        />
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

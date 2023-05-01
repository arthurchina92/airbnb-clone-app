import {View, Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import imageBg from '../../../assets/images/wallpaper.jpg';

export default function HomeScreen() {
  return (
    <View>
      <ImageBackground source={imageBg} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onpress={() => console.warn('Explore btn clicked')}>
          <Text style={styles.buttonText}> Explore nearby stays </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

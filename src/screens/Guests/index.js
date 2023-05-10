import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

export default function GuestsScreen() {
  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}> Adults</Text>
          <Text style={styles.agesText}> Ages 13 or above </Text>
        </View>
        <View style={styles.pressableContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.buttonText}> 0 </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}> + </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

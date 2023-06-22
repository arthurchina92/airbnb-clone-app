import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function GuestsScreen() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}> Adults</Text>
          <Text style={styles.agesText}> Ages 13 or above </Text>
        </View>
        <View style={styles.pressableContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}> {adults} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setAdults(adults + 1)}>
            <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}> Children</Text>
          <Text style={styles.agesText}> Ages 2-12 </Text>
        </View>
        <View style={styles.pressableContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setChildren(Math.max(0, children - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}> {children} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setChildren(children + 1)}>
            <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}> Infants</Text>
          <Text style={styles.agesText}> Under 2 </Text>
        </View>
        <View style={styles.pressableContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}> {infants} </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setInfants(infants + 1)}>
            <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.searchButton}
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'Search',
              },
            })
          }>
          <Text style={styles.searchText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
}

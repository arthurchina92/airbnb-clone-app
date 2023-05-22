import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Post(props) {
  const {house} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: house.images[0]}} />
      <Text style={styles.bedrooms}>
        {house.beds} bed in {house.bedrooms} bedrooms
      </Text>
      <Text style={styles.description}>
        {house.city}. {house.name}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${house.price.total}</Text>
        /Night
      </Text>
    </View>
  );
}

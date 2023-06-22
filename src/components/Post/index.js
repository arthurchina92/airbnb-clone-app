import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Post(props) {
  const {house} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: house.image}} />
      <Text style={styles.bedrooms}>
        {house.beds} bed in {house.bedroom} bedrooms
      </Text>
      <Text style={styles.description}>{house.type}</Text>
      <Text style={styles.description}>{house.title}</Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${house.oldPrice}</Text>
        <Text>${house.newPrice} </Text>
        /Night
      </Text>
    </View>
  );
}

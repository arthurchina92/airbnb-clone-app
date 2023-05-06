import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Post() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Photos-Apartment-HD.jpg',
        }}
      />
      <Text>1 bed in one bedroom</Text>
      <Text>
        Lovely cozy apartment near to the mainstreet and principal attractions
      </Text>
      <Text>Lorem ipzum has been the standard price</Text>
      <Text>$36</Text>
      <Text>$30</Text>
      <Text>$250 total</Text>
    </View>
  );
}

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
      <Text style={styles.bedrooms}>1 bed in one bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        Lovely cozy apartment near to the mainstreet and principal attractions
        Lorem Lorem ipsum stakdsknfksdnfkjnsdkfnsdnfsdnfnsdknfksdnfnsdfnsdf
        dfkjnsdkfnsdnfkjsdnfjsndlfnsdlnflslksdfsd fmsd kfs vs kvj vsd vj
        sdlfnsdfnlsdnflsdnldsnlsdn
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}> $30 </Text>
        /Night
      </Text>

      <Text style={styles.totalPrice}>$250 total</Text>
    </View>
  );
}

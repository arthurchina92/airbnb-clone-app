import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
  },
  bedrooms: {
    marginTop: 10,
    color: '#808080',
  },
  description: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 26,
    marginTop: 10,
  },
  prices: {
    fontSize: 18,
    color: '#000000',
    marginVertical: 10,
  },
  oldPrice: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    color: '#000000',
    fontWeight: 'bold',
  },
  totalPrice: {
    textDecorationLine: 'underline',
  },
});

export default styles;

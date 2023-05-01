import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 500,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default styles;

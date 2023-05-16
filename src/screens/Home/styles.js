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
  textInput: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginRight: 50,
  },
  searchButton: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    marginTop: 40,
    zIndex: 100,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default styles;

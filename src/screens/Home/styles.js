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
    height: 60,
    width: '80%',
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'justify',
    color: '#000000',
  },
  searchButton: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: 40,
    zIndex: 100,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 30,
  },
  searchIcon: {
    paddingVertical: 10,
  },
});

export default styles;

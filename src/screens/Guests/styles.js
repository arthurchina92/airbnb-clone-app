import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
  },
  row: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  agesText: {
    marginBottom: 15,
    color: 'grey',
  },
  adultsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  pressableContainer: {
    flexDirection: 'row',
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
  },
  buttonText: {
    fontSize: 20,
  },
  searchButton: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 425,
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

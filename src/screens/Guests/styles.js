import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {},
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
    backgroundColor: 'grey',
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default styles;

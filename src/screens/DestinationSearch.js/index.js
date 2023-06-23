import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

export default function DestinationSearch() {
  const [searchInput, setSearchInput] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: 500, width: '95%', alignSelf: 'center'}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            navigation.navigate('Guests');
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyBNiHC1OeNA2eZnRO0-TEz4jd3_wdsTRX0',
            language: 'en',
            type: '(cities)',
          }}
          suppressDefaultStyles
          renderRow={item => <SuggestionRow item={item} />}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={searchInput}
        onChangeText={setSearchInput}
      />
    </View>
  );
}

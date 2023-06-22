import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../../components/Post';
import Houses from '../../../assets/data/feed';

export default function SearchResults(props) {
  // const [houses, setHouses] = useState([]);

  // const loadData = async () => {
  //   const url =
  //     'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '8accf14775mshdd18f382c218d69p17efa9jsncf1030816094',
  //       'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  //     },
  //   };
  //   try {
  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     console.log(data);
  //     setHouses(data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <View>
      <FlatList
        data={Houses}
        renderItem={({item}) => <Post house={item} />}
        // keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

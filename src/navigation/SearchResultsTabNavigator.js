import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/Search';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#f15454'}}>
      <Tab.Screen name="List" component={SearchResults} />
      <Tab.Screen name="Map" component={SearchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;

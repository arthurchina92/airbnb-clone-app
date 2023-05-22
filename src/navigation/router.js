import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearch from '../screens/DestinationSearch.js';
import HomeTabNavigator from './HomeTabNavigator.js';
import GuestsScreen from '../screens/Guests/index.js';
import SearchResults from '../screens/Search/index.js';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination'}
          component={DestinationSearch}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'Who´s traveling with you?',
          }}
        />
        <Stack.Screen
          name={'Search'}
          component={SearchResults}
          options={{
            title: 'Search Screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

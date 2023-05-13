import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearch from '../screens/DestinationSearch.js';
import HomeTabNavigator from './HomeTabNavigator.js';

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
        {/* <Stack.Screen
          name={'DestinationSearch'}
          component={DestinationSearch}
          options={{
            title: 'Search your destination',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

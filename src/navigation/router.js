import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearch from '../screens/DestinationSearch.js';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'DestinationSearch'}
          component={DestinationSearch}
          title={'Search your destination'}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

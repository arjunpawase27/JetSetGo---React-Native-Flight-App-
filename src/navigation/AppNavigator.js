import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TravelRequestScreen from '../screens/TravelRequestScreen';
import FlightResultsScreen from '../screens/FlightResultsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TravelRequest"
          component={TravelRequestScreen}
          options={{ title: 'Travel Request' }}
        />
        <Stack.Screen
          name="FlightResults"
          component={FlightResultsScreen}
          options={{ title: 'Flight Results' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

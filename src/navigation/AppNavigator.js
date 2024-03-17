import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TravelRequestScreen from '../screens/TravelRequestScreen';
import FlightResultsScreen from '../screens/FlightResultsScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelRequest"
          component={TravelRequestScreen}
          options={{
            title: 'Travel Request',
            headerShown: false,
            animationEnabled: true
          }}
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

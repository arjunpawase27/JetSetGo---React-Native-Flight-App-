import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FlightResultsScreen from '../screens/FlightResultsScreen';
import SplashScreen from '../screens/SplashScreen';
import FlightDetailsScreen from '../screens/FlightDetailsScreen';
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
          name="FlightResults"
          component={FlightResultsScreen}
          options={{ title: 'Flight Results', headerShown: false }}
        />
         <Stack.Screen
          name="FlightDetails"
          component={FlightDetailsScreen}
          options={{ title: 'Flight Details', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

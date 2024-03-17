import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../../src/navigation/AppNavigator';
import SplashScreen from '../../../src/screens/SplashScreen';
import FlightResultsScreen from '../../../src/screens/FlightResultsScreen';
import FlightDetailsScreen from '../../../src/screens/FlightDetailsScreen';

// Mocking the screens for testing purposes
jest.mock('../../../src/screens/SplashScreen', () => jest.fn());
jest.mock('../../../src/screens/FlightResultsScreen', () => jest.fn());
jest.mock('../../../src/screens/FlightDetailsScreen', () => jest.fn());

describe('AppNavigator', () => {
  test('renders SplashScreen by default', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
    expect(SplashScreen).toHaveBeenCalled();
    expect(getByText('Splash')).toBeTruthy();
  });

  test('navigates to FlightResultsScreen correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
    expect(FlightResultsScreen).not.toHaveBeenCalled();
    getByText('Splash').press();
    expect(FlightResultsScreen).toHaveBeenCalled();
    expect(getByText('Flight Results')).toBeTruthy();
  });

  test('navigates to FlightDetailsScreen correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
    expect(FlightDetailsScreen).not.toHaveBeenCalled();
    getByText('Flight Results').press();
    expect(FlightDetailsScreen).toHaveBeenCalled();
    expect(getByText('Flight Details')).toBeTruthy();
  });
});

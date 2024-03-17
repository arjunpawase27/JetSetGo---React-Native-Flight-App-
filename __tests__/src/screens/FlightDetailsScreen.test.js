// __tests__/src/screens/FlightDetailsScreen.test.js

import React from 'react';
import { render } from '@testing-library/react-native';
import FlightDetailsScreen from '../../../src/screens/FlightDetailsScreen';
describe('FlightDetailsScreen', () => {
  test('renders correctly', () => {
    const route = {
      params: {
        aircraft: 'Boeing 787',
        airline: 'Air India',
        arrivalTime: '2024-03-15T20:30:00',
        departureTime: '2024-03-15T17:00:00',
        destination: 'Kolkata',
        duration: '3 hours 30 minutes',
        flightNumber: 'AI230',
        gate: 'D10',
        origin: 'Bangalore',
        price: 6200,
        seatsAvailable: 110,
      },
    };

    const { toJSON } = render(<FlightDetailsScreen route={route} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

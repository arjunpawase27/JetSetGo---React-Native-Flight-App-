import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';

import FlightResultsScreen from '../../../src/screens/FlightResultsScreen';
const mockData = [
  {
    id: 1,
    airline: 'Air India',
    origin: 'Bangalore',
    destination: 'Kolkata',
    price: 6200,
    seatsAvailable: 110,
    flightNumber: 'AI230',
  },
  {
    id: 2,
    airline: 'IndiGo',
    origin: 'Delhi',
    destination: 'Mumbai',
    price: 5400,
    seatsAvailable: 90,
    flightNumber: '6E202',
  },
  // Add more mock data as needed
];

describe('FlightResultsScreen', () => {
  let axiosMock;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.restore();
  });

  test('renders loading indicator when fetching data', async () => {
    axiosMock.onGet('https://api.npoint.io/378e02e8e732bb1ac55b').reply(200, []);

    const { getByTestId } = render(<FlightResultsScreen />);

    const loader = getByTestId('loader');
    expect(loader).toBeDefined();
  });

  test('renders error message when data fetching fails', async () => {
    axiosMock.onGet('https://api.npoint.io/378e02e8e732bb1ac55b').reply(500);

    const { getByText } = render(<FlightResultsScreen />);

    await waitFor(() => {
      const errorMessage = getByText('Something went wrong, please try again later');
      expect(errorMessage).toBeDefined();
    });
  });

  test('renders flight list when data is fetched successfully', async () => {
    axiosMock.onGet('https://api.npoint.io/378e02e8e732bb1ac55b').reply(200, mockData);

    const { findByText } = render(<FlightResultsScreen />);

    await waitFor(() => {
      const flight1 = findByText('Air India');
      const flight2 = findByText('IndiGo');
      expect(flight1).toBeDefined();
      expect(flight2).toBeDefined();
    });
  });

  // Add more test cases for user interactions if needed
});


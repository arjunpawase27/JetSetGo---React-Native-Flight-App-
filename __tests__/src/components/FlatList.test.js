import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FlightFlatList from '../../../src/components/FlatList';

describe('FlightFlatList Component', () => {
  const data = [
    { id: 1, name: 'Flight 1' },
    { id: 2, name: 'Flight 2' },
    { id: 3, name: 'Flight 3' },
  ];

  test('renders FlatList correctly with given data', () => {
    const { getByTestId } = render(
      <FlightFlatList
        data={data}
        onPressItem={() => {}}
      />
    );
    const { toJSON } = render(
        <FlightFlatList
          data={data}
          onPressItem={() => {}}
        />
      );
    expect(toJSON()).toMatchSnapshot();
    const flatList = getByTestId('flight-flat-list');
    expect(flatList.props.data).toEqual(data);
    expect(flatList.props.renderItem).toBeDefined();
    expect(flatList.props.keyExtractor).toBeDefined();
  });
});

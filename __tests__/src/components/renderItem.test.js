import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FlightRenderItem from '../../../src/components/renderItem';
import renderer from 'react-test-renderer';
describe('FlightRenderItem Component', () => {
  const item = {
    airline: "Air India",
    origin: "Bangalore",
    destination: "Kolkata",
    price: 6200,
    seatsAvailable: 110
  };
  describe('FlightRenderItem Component Snapshot', () => {
    const item = {
      airline: "Air India",
      origin: "Bangalore",
      destination: "Kolkata",
      price: 6200,
      seatsAvailable: 110
    };
  
    test('renders correctly', () => {
      const tree = renderer.create(<FlightRenderItem item={item} onPress={() => {}} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  test('renders correctly with given item data', () => {
    const { getByText } = render(
      <FlightRenderItem item={item} onPress={() => {}} />
    );

    expect(getByText(item.airline)).toBeDefined();
    expect(getByText(`${item.origin} -> ${item.destination}`)).toBeDefined();
    expect(getByText(`${item.price} ₹`)).toBeDefined();
    expect(getByText(`${item.seatsAvailable} Seats`)).toBeDefined();
  });

  test('calls onPress when the item is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <FlightRenderItem item={item} onPress={onPressMock} />
    );

    const touchableItem = getByTestId('flight-item-touchable');
    fireEvent.press(touchableItem);
    expect(onPressMock).toHaveBeenCalledWith(item);
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchComponent from '../../../src/components/SearchComponent';
describe('SearchComponent', () => {
  test('renders correctly', () => {
    const { toJSON } = render(<SearchComponent onSearch={() => {}} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('updates search query on text input change', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(<SearchComponent onSearch={onSearchMock} />);

    const input = getByPlaceholderText('Search by airline');
    fireEvent.changeText(input, 'Air India');
    
    expect(input.props.value).toBe('Air India');
    expect(onSearchMock).toHaveBeenCalledWith('Air India');
  });

  test('clears search query and calls onSearch when cancel button is pressed', () => {
    const onSearchMock = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(<SearchComponent onSearch={onSearchMock} />);

    const input = getByPlaceholderText('Search by airline');
    fireEvent.changeText(input, 'Air India');

    const cancelButton = getByTestId('cancel-button');
    fireEvent.press(cancelButton);

    expect(input.props.value).toBe('');
    expect(onSearchMock).toHaveBeenCalledWith('');
  });
  
});

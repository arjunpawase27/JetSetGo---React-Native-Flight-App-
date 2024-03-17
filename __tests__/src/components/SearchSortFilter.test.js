import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchSortFilterBar from '../../../src/components/SearchSortFilterBar';
describe('SearchSortFilterBar', () => {
  test('renders correctly', () => {
    const { toJSON } = render(
      <SearchSortFilterBar
        onSort={() => {}}
        onClear={() => {}}
        onSearch={() => {}}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

 

 
});

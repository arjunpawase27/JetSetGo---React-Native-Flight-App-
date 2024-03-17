import React from 'react';
import { FlatList } from 'react-native';
import FlightRenderItem from './renderItem';

const FlightFlatList = ({ data, onPressItem }) => {
  const handlePressItem = (item) => {
    if (onPressItem) {
      onPressItem(item);
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <FlightRenderItem item={item} onPress={() => handlePressItem(item)} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default FlightFlatList;

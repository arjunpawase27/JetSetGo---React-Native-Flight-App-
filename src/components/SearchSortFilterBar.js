import React, { useState } from 'react';
import { View, Button, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import SearchComponent from './SearchComponent';

const SearchSortFilterBar = ({ onSort, onClear, onSearch }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);

  const handleSort = (sortBy) => {
    setShowDropdown(false);
    setSelectedSort(sortBy);
    onSort(sortBy);
  };

  const clearSort = () => {
    setSelectedSort(null);
    onClear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchSortContainer}>
        <SearchComponent onSearch={onSearch} />
        <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
          <View style={styles.icon}>
            <Image
              source={require('../assets/images/sort.jpg')} 
              style={styles.iconImage}
            />
          </View>
        </TouchableOpacity>
        
        {showDropdown && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => handleSort('price')}>
              <Text style={styles.dropdownItem}>Sort by Price</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSort('airline')}>
              <Text style={styles.dropdownItem}>Sort by Airline</Text>
            </TouchableOpacity>
          </View>
        )}
        {/* <TouchableOpacity onPress={onClear}>
          <View style={styles.icon}>
            <Image
              source={require('../assets/images/filter.jpg')} 
              style={styles.iconImage}
            />
          </View>
        </TouchableOpacity> */}
      </View>
      {selectedSort && (
        <TouchableOpacity onPress={clearSort}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{selectedSort}</Text>
            <Image
              source={require('../assets/images/cancel.jpg')} 
              style={styles.cancelIcon}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  searchSortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
    //marginHorizontal: 5,
    gap: 5
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#ced4da",
    marginBottom: 20
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    left: 192, 
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    padding: 5,
    zIndex: 999,
  },
  dropdownItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#2f4149"
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width:100,
    justifyContent:"space-between",
    marginHorizontal:10
  },
  chipText: {
    marginRight: 5,
    fontWeight:"bold",
    color:"#2f4149"
  },
  cancelIcon: {
    width: 15,
    height: 15,
  },
});

export default SearchSortFilterBar;

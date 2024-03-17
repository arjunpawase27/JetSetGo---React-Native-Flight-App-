import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Keyboard } from 'react-native';

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  
const handleClear = ()=>{
    setSearchQuery("")
    onSearch("");
    Keyboard.dismiss();
}
  const handleChangeText = (text) => {
  setSearchQuery(text)
    onSearch(text);
  };


  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        onChangeText={handleChangeText} 
        value={searchQuery}
        placeholder="Search by airline"
        placeholderTextColor="#777"
      />
       {!searchQuery?
       <Image
        source={require('../assets/images/search.jpg')} 
        style={styles.searchIcon}
      />:<TouchableOpacity onPress={handleClear} testID="cancel-button">
        <Image
        source={require('../assets/images/cancel.jpg')} 
        style={styles.searchIcon}
      />
        </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#ced4da',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  searchInput: {
    marginRight: 10,
    flex: 1,
    height: 40,
   
    color: '#495057',
  },
});

export default SearchComponent;

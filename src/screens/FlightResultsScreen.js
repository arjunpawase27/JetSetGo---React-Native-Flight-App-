import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios';

const FlightResultsScreen = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    axios.get('https://api.npoint.io/378e02e8e732bb1ac55b')
      .then(response => {
        setFlights(response.data);
        setFilteredFlights(response.data);
      })
      .catch(error => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  const handleSearch = () => {
    const filtered = flights.filter(flight => flight.airline.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredFlights(filtered);
  };

  const handleSort = () => {
    const sorted = [...filteredFlights].sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'airline') {
        return a.airline.localeCompare(b.airline);
      }
    });
    setFilteredFlights(sorted);
  };

  const handleClear = () => {
    setSearchQuery('');
    setSortBy('price');
    setFilteredFlights(flights);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Results</Text>
      <View style={styles.searchSortContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
          placeholder="Search by airline"
          placeholderTextColor="#777"
        />
        <View style={styles.buttonsContainer}>
          <Button title="Search" onPress={handleSearch} color="#007bff" />
          <Button title="Sort by Price" onPress={() => {setSortBy('price');handleSort();}} color="#28a745"  />
          <Button title="Sort by Airline" onPress={() => {setSortBy('airline');handleSort();}} color="#dc3545" />
          
        </View>
        <View style={styles.clearButton}>
        <Button title="Clear Search & Sort" onPress={handleClear} color="#6c757d" />
        </View>
      </View>
      <FlatList
        data={filteredFlights}
        renderItem={({ item }) => (
          <View style={styles.flightItem}>
            <Text style={styles.airline}>{item.airline}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
            {/* Render other flight details */}
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  searchSortContainer: {
    marginBottom: 20,
  },
  searchInput: {
    marginRight: 10,
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#495057',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    marginVertical:20
  
  },
  flightItem: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  airline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff',
  },
  price: {
    fontSize: 16,
    color: '#28a745',
  },
});

export default FlightResultsScreen;

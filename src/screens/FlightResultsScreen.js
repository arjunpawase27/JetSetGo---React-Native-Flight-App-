import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator,Image } from 'react-native';
import axios from 'axios';
import FlightFlatList from '../components/FlatList';
import SearchSortFilterBar from '../components/SearchSortFilterBar';
import { useNavigation } from '@react-navigation/native';

const FlightResultsScreen = () => {
  const navigation = useNavigation();
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [sortBy, setSortBy] = useState('price');
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get('https://api.npoint.io/378e02e8e732bb1ac55b')
      .then(response => {
        setFlights(response.data);
        setFilteredFlights(response.data);
        setLoading(false); 
        setError(null); 
      })
      .catch(error => {
        setLoading(false); 
        setError('Something went wrong, please try again later'); 
      });
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = flights.filter(flight => flight.airline.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredFlights(filtered);
  };

  const handleItemPress =(item)=>{
    navigation.navigate("FlightDetails",item);
  }

  const handleSort = (sortBy) => {
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
    setFilteredFlights(flights);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        
      <Text style={styles.title}>JetSetGo</Text>
        <Text style={styles.subTitle}>Elevating Your Flight Experience!</Text>
        <SearchSortFilterBar onSearch={handleSearch} onSort={handleSort} onClear={handleClear} />
        {loading ? ( 
          <ActivityIndicator size="large" color="#7bd3f7" style={styles.loader} />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <FlightFlatList data={filteredFlights} onPressItem={handleItemPress} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7bd3f7',
    flexDirection:"row"
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 1000,
    paddingHorizontal:16
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: "#0C2D48",
   
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { width: 3, height: 2 }, 
    textShadowRadius: 7,
  },
  subTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
  },
 
});

export default FlightResultsScreen;

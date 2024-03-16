import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const FlightResultsScreen = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/378e02e8e732bb1ac55b')
      .then(response => {
        setFlights(response.data);
      })
      .catch(error => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.flightItem}>
      <Text style={styles.airline}>{item.airline}</Text>
      <Text style={styles.price}>{item.price}</Text>
      {/* Render other flight details */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Results</Text>
      <FlatList
        data={flights}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"black"
  },
  flightItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    width: '100%',
  },
  airline: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
  },
});

export default FlightResultsScreen;

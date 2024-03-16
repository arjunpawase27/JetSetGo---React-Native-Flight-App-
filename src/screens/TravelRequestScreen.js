import React from 'react';
import { View, Button } from 'react-native';

const TravelRequestScreen = ({ navigation }) => {
  const handleSearchFlights = () => {
    navigation.navigate('FlightResults');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Search Flights" onPress={handleSearchFlights} />
    </View>
  );
};

export default TravelRequestScreen;

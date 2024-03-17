import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const FlightDetailsScreen = ({ route }) => {
  const { aircraft, airline, arrivalTime, departureTime, destination, duration, flightNumber, gate, origin, price, seatsAvailable } = route.params;

  const animations = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  useEffect(() => {
    const animateDetails = () => {
      const animationSequence = animations.map((anim, index) => (
        Animated.timing(anim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          delay: index * 100,
        })
      ));
      Animated.stagger(100, animationSequence).start();
    };

    animateDetails();
  }, [animations]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.innerBox}>
        <Text style={styles.title}>Flight Details</Text>

        {[
          { label: 'Aircraft:', value: aircraft },
          { label: 'Airline:', value: airline },
          { label: 'Departure Date:', value: departureTime },
          { label: 'Arrival Date:', value: arrivalTime },
          { label: 'Origin:', value: origin },
          { label: 'Destination:', value: destination },
          { label: 'Flight Number:', value: flightNumber },
          { label: 'Duration:', value: duration },
          { label: 'Gate:', value: gate },
          { label: 'Price:', value: `$${price}` },
          { label: 'Seats Available:', value: seatsAvailable },
        ].map((detail, index) => (
          <Animated.View key={index} style={[styles.detailContainer, { opacity: animations[index] }]}>
            <Text style={styles.detailLabel}>{detail.label}</Text>
            <Text style={styles.detailText}>{detail.value}</Text>
          </Animated.View>
        ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7bd3f7',
    
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#f8f9fa',
    borderTopLeftRadius: 1000,
  },
  innerBox:{
    borderRadius:20,
    borderWidth:2,
    padding:12,
    borderColor:"#ced4da"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#555',
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
});

export default FlightDetailsScreen;

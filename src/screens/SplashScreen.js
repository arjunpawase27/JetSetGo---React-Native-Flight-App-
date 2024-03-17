import React, { useEffect, useRef } from 'react';
import { View,Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const slideAnim = useRef(new Animated.Value(-300)).current; 

  useEffect(() => {
    const fadeIn = Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000, 
        useNativeDriver: true, 
      }
    );

    const slideIn = Animated.timing(
      slideAnim,
      {
        toValue: -12,
        duration: 1000, 
        useNativeDriver: true, 
      }
    );

    const slideOut = Animated.timing(
      slideAnim,
      {
        toValue: 300,
        duration: 1000, 
        useNativeDriver: true,
      }
    );

    const sequence = Animated.sequence([
      fadeIn,
      Animated.delay(1000),
      slideIn,
      Animated.delay(2000), 
      slideOut,
    ]);

    sequence.start(() => {
      navigation.replace('FlightResults');
    });

    slideIn.start(() => {
     
      console.log('Slide animation completed');
    });

   
    return () => {
      sequence.stop();
    };
  }, [fadeAnim, slideAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/logo.jpg')}
        style={[styles.image, { opacity: fadeAnim }]}
      />
      <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
        <Text style={styles.text}>JetSetGo</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 20,
    color: "#0C2D48",
   
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { width: 3, height: 2 }, 
    textShadowRadius: 7,
   
  },
});

export default SplashScreen;

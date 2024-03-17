import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FlightRenderItem = ({ item, onPress }) => {
    const fromTo = `${item?.origin} -> ${item?.destination}`;

    return (
        <TouchableOpacity onPress={() => onPress(item)} style={styles.flightItem} testID="flight-item-touchable">
            <View style={styles.detailView}>
                <Text style={styles.airline}>{item.airline}</Text>
                <Text style={styles.routeText}>{fromTo}</Text>
            </View>
            <View style={styles.priceView}>
                <Text style={styles.price}>{item?.price} ₹</Text>
                <Text style={styles.seatsText}>{item?.seatsAvailable} Seats</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    flightItem: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5.84,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    airline: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#2f4149',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    seatsText: {
        fontSize: 16,
        color: '#70a8c0',
    },
    routeText: {
        fontSize: 16,
        color: '#70a8c0',
        marginBottom: 5,
    },
    priceView: {
        backgroundColor: "#7bd3f7",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        width: 125, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    detailView: {
        padding: 15
    }
});

export default FlightRenderItem;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, Fonts } from '../../assets'; // Adjust this import path as necessary
import { FontSize } from '../../utility/FontSize';

const LocationModalItem = ({ address, selected, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.iconContainer}>
                {selected ? (
                    <View style={styles.radioSelected} />
                ) : (
                    <View style={styles.radioUnselected} />
                )}
            </View>
            <Text style={styles.addressText}>{address}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginHorizontal: 10,
    },
    iconContainer: {
        marginRight: 10,
    },
    radioSelected: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.RED,
        backgroundColor: Colors.RED,
    },
    radioUnselected: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.RED,
        backgroundColor: '#fff',
    },
    addressText: {
        fontSize: FontSize(14),
        fontFamily: Fonts.SIGNIKA_LIGHT,
        color: '#333',
    },
});

export default LocationModalItem;

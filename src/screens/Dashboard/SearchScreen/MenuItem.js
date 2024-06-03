import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Icons } from '../../../assets'; // Adjust this import path as necessary
import { FontSize } from '../../../utility/FontSize';

const MenuItem = ({ image, title, description, price, onAdd }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.bottomRow}>
                    <TouchableOpacity style={styles.addButton} onPress={onAdd}>
                        <Image source={Icons.PLUS} style={styles.addIcon} />
                    </TouchableOpacity>
                    <Text style={styles.price}>${price}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        // elevation: 2,
        marginHorizontal: 20,
    },
    image: {
        width: 112,
        height: 112,
        borderRadius: 10,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: FontSize(13),
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
        color: '#333',
    },
    description: {
        fontSize: FontSize(12),
        fontFamily: Fonts.SIGNIKA_LIGHT,
        color: '#666',
        marginVertical: 5,
        lineHeight: 17
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addButton: {
        backgroundColor: Colors.RED,
        padding: 5,
        borderRadius: 5,
    },
    addIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    price: {
        fontSize: FontSize(16),
        fontFamily: Fonts.HERMAN,
        color: '#1D5632',
    },
});

export default MenuItem;

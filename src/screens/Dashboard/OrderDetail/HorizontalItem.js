import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, Fonts } from '../../../assets';
import { FontSize } from '../../../utility/FontSize';
import UtilityMethods from '../../../utility/UtilityMethods';

const HorizontalItem = ({ imageUrl, title, description, quantity, price }) => {
    return (
        <View style={styles.card}>
            <Image source={imageUrl} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.quantity}>{quantity}X</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.price}>${price}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        // marginVertical: 10,
        alignItems: 'center',
        elevation: 2,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontSize: FontSize(18),
        fontFamily: Fonts.SIGNIKA_BOLD,
        color: Colors.RED,
        marginRight: 5,
    },
    title: {
        fontSize: FontSize(18),
        fontFamily: Fonts.SIGNIKA_BOLD,
        color: Colors.RED,
    },
    description: {
        fontSize: FontSize(10),
        fontFamily: Fonts.SIGNIKA_REGULAR,
        marginVertical: 5,
        // textAlign: 'justify',
        width: UtilityMethods.wp(37),
        lineHeight: 14,
        color: Colors.BLACK,
    },
    price: {
        fontSize: FontSize(20),
        fontFamily: Fonts.SIGNIKA_BOLD,
        color: '#1D5632',
    },
    row: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
});

export default HorizontalItem;

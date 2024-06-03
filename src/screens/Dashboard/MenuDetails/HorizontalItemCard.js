import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Icons } from '../../../assets';
import { FontSize } from '../../../utility/FontSize';

const HorizontalItemCard = ({ imageUrl, title, description, price, onAddToCart }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} style={styles.image} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{price}</Text>
                    <TouchableOpacity onPress={onAddToCart}>
                        <Image
                            source={Icons.CART} // Replace with your cart icon URL
                            style={styles.cartIcon}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: Colors.RED,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 0,
        paddingRight: 25,
        marginVertical: 10,
        alignItems: 'center',
        marginHorizontal: 10

    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 50,
    },
    content: {
        flex: 2,
        paddingLeft: 10,
    },
    title: {
        fontSize: FontSize(18),
        fontFamily: Fonts.HERMAN,
        color: 'white',
    },
    description: {
        fontSize: 14,
        color: 'white',
        marginVertical: 10,
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        textAlign: 'justify',
        lineHeight: 14
    },
    footer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 18,
        fontFamily: Fonts.HERMAN,
        color: 'white',
    },
    cartIcon: {
        width: 25,
        height: 25,
        tintColor: 'white',
        marginLeft: 10
    },
});

export default HorizontalItemCard;

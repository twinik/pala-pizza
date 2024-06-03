import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Fonts, Icons } from '../../../assets';
import { FontSize } from '../../../utility/FontSize';
import UtilityMethods from '../../../utility/UtilityMethods';

const VerticalItem = ({ imageUrl, title, description, price, onAddToCart }) => {
    return (
        <View style={styles.card}>
            <Image source={imageUrl} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{price}</Text>
                    <TouchableOpacity onPress={onAddToCart}>
                        <Image
                            source={Icons.CART}
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
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
        // overflow: 'hidden',
        backgroundColor: 'white',
        marginVertical: 10,
        width: '45%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: UtilityMethods.hp(7)
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        position: 'absolute',
        top: -60,
        zIndex: 1,

    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: FontSize(18),
        fontWeight: 'bold',
        color: 'black',
        fontFamily: Fonts.HERMAN,
        marginVertical: 10,
    },
    description: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        textAlign: 'justify',
        fontFamily: Fonts.SIGNIKA_LIGHT
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        // paddingHorizontal: 20,
        // backgroundColor: 'red',
        marginLeft: 20
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: Fonts.HERMAN,

    },
    cartIcon: {
        width: 30,
        height: 30,
        tintColor: 'black',
    },
});

export default VerticalItem;

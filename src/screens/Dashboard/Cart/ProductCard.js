import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import UtilityMethods from '../../../utility/UtilityMethods';
import { Colors, Fonts, Icons } from '../../../assets';

const ProductCard = ({ imageUrl, title, onAdd }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={onAdd}>
                <Image style={styles.addButtonText} source={Icons.PLUS} tintColor={Colors.RED} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        height: UtilityMethods.hp(14),
        width: UtilityMethods.wp(19),
    },
    imageContainer: {
        width: '100%',
        // aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: UtilityMethods.wp(18),
        height: UtilityMethods.hp(10),
        resizeMode: 'contain',
        marginTop: UtilityMethods.hp(2)
    },
    title: {
        fontSize: 12,
        fontFamily: Fonts.HERMAN,
        color: Colors.RED,
        marginVertical: 10,
        position: 'absolute',
        top: 2,
        left: 10,
    },
    addButton: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    addButtonText: {
        height: 12,
        width: 12,
    },
});

export default ProductCard;

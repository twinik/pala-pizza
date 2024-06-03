import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontSize } from '../../../utility/FontSize';
import { Fonts } from '../../../assets';

const ItemCard = ({ imageUrl, title, subtitle, description, price }) => {
    return (
        <View style={styles.card}>
            <Image source={imageUrl} style={styles.image} resizeMode='contain' />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
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
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        elevation: 2,
        width: '48%',
        marginHorizontal: 5,
    },
    image: {
        width: 30,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: FontSize(12),
        fontFamily: Fonts.SIGNIKA_BOLD,
        color: '#D32F2F',
    },
    subtitle: {
        fontSize: FontSize(10),
        fontFamily: Fonts.SIGNIKA_REGULAR,
        color: 'black',
        marginBottom: 5,
    },
    description: {
        fontSize: FontSize(6),
        fontFamily: Fonts.SIGNIKA_REGULAR,
        color: 'black',
        marginVertical: 5,
        width: '50%',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1D5632',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
});

export default ItemCard;

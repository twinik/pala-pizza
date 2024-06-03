import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Fonts, Icons } from '../../../assets';
import { FontSize } from '../../../utility/FontSize';

const OrderHeader = ({ title, orderId, onBackPress, onClosePress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
                <Image
                    source={Icons.BACK} // Replace with your back icon URL
                    style={styles.icon}
                />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.orderId}>ORDER ID {orderId}</Text>
            </View>
            <TouchableOpacity onPress={onClosePress} style={styles.iconButton}>
                <Image
                    source={Icons.CLOSE1} // Replace with your close icon URL
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: '#D32F2F',
        paddingVertical: 10,
        // paddingHorizontal: 20,
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: 'white',
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: FontSize(16),
        fontFamily: Fonts.HERMAN,
        color: 'white',
        marginTop: 20
    },
    orderId: {
        fontSize: FontSize(8),
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        color: 'white',
    },
});

export default OrderHeader;

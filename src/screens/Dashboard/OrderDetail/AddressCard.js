import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Icons } from '../../../assets';
import { FontSize } from '../../../utility/FontSize';
import UtilityMethods from '../../../utility/UtilityMethods';

const AddressCard = ({ address, recipient, phone, onEdit }) => {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Image
                    source={Icons.LOCATION} // Replace with your location icon URL
                    style={styles.icon}
                    resizeMode='contain'
                />
                <View style={styles.textContainer}>
                    <Text style={styles.label}>Tu dirección de entrega:</Text>
                    <Text style={styles.value}>{address}</Text>
                </View>
                <TouchableOpacity onPress={onEdit} style={styles.editButton}>
                    <Image
                        source={Icons.EDIT} // Replace with your edit icon URL
                        style={styles.editIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.empty} />
                <View>
                    <Text style={styles.label}>Quien recibe la orden:</Text>
                    <View style={styles.row}>
                        <Text style={styles.recipient}>{recipient}</Text>
                        <Text style={styles.phone}>{phone}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        paddingBottom: 0,
        borderRadius: 10,
        backgroundColor: 'white',
        // marginVertical: 10,
        // elevation: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 30,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    label: {
        fontSize: FontSize(14),
        fontFamily: Fonts.SIGNIKA_BOLD,
        color: Colors.RED,
        marginBottom: 5,
    },
    value: {
        fontSize: FontSize(13),
        fontFamily: Fonts.SIGNIKA_REGULAR,
        color: 'black',
    },
    editButton: {
        // marginLeft: 10,
        marginBottom: 40
    },
    editIcon: {
        width: 20,
        height: 20,
    },
    recipientContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recipient: {
        fontSize: FontSize(16),
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        color: 'black',
        marginRight: 10,
    },
    phone: {
        fontSize: FontSize(16),
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        color: 'gray',
    },
    empty: {
        width: UtilityMethods.wp(10),
    }
});

export default AddressCard;

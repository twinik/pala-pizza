import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, Fonts, Icons } from '../../assets';
import { FontSize } from '../../utility/FontSize';

const UserModalItem = ({ title, subtitle, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image source={Icons.RIGHT_ARROW} style={styles.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#4D4D4D',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: FontSize(16),
        fontFamily: Fonts.SIGNIKA_BOLD,
        color: Colors.RED,
    },
    subtitle: {
        fontSize: FontSize(12),
        fontFamily: Fonts.SIGNIKA_LIGHT,
        color: Colors.RED,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: Colors.RED,
    },
});

export default UserModalItem;

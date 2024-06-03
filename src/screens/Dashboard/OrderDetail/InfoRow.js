import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontSize } from '../../../utility/FontSize';
import { Fonts } from '../../../assets';

const InfoRow = ({ label, value }) => {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 0,
        borderRadius: 5,
        paddingHorizontal: 30,
    },
    label: {
        fontSize: FontSize(16),
        fontFamily: Fonts.SIGNIKA_BOLD,
        color: 'white',
    },
    value: {
        fontSize: FontSize(16),
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        color: 'white',
    },
});

export default InfoRow;

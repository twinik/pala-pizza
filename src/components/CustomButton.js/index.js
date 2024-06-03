import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../assets';

const CustomButton = ({ title, onPress, style, titleStyle, numberOfLines }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text numberOfLines={numberOfLines} style={[styles.buttonText, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.RED,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // shadowColor: Colors.BLACK,
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.15,
        // shadowRadius: 2.84,
        // elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CustomButton;

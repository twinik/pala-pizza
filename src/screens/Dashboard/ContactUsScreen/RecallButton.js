import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import UtilityMethods from '../../../utility/UtilityMethods';
import { FontSize } from '../../../utility/FontSize';
import { Fonts } from '../../../assets';

const RecallButton = ({ title, onPress, icon, style, textStyle, iconStyle }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <View style={styles.content}>
                <Image source={icon} style={[styles.icon, iconStyle]} />
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: UtilityMethods.wp(70),
        alignSelf: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: 'white',
        marginRight: 10,
    },
    buttonText: {
        fontSize: FontSize(13),
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
        color: 'white',
    },
});

export default RecallButton;

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors, Fonts } from '../../assets';
import { FontSize } from '../../utility/FontSize';

const Label = ({ text, textStyle, containerStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.text, textStyle]}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        marginHorizontal: 10
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    text: {
        fontSize: FontSize(14),
        color: Colors.BLACK,
        fontFamily: Fonts.SIGNIKA_MEDIUM
    },
});

export default Label;

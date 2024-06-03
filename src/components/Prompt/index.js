import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts } from '../../assets';
import { FontSize } from '../../utility/FontSize';
import UtilityMethods from '../../utility/UtilityMethods';

const Prompt = ({ onPress, leftTitle, rightTitle, leftTextStyle, rightTextStyle, containerStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.leftText, leftTextStyle]}>
                {leftTitle}
            </Text>
            <TouchableOpacity onPress={onPress} style={styles.touchable}>
                <Text style={[styles.rightText, rightTextStyle]}>
                    {rightTitle}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    leftText: {
        fontSize: FontSize(12),
        color: Colors.RED,
        fontFamily: Fonts.SIGNIKA_MEDIUM,
    },
    touchable: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 5, // Add some spacing between the left and right text if needed
    },
    rightText: {
        fontSize: FontSize(12),
        fontWeight: 'bold',
        color: Colors.RED,
        fontFamily: Fonts.SIGNIKA_BOLD,
    },
});

export default Prompt;

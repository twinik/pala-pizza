import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts } from '../../assets';
import { FontSize } from '../../utility/FontSize';
import UtilityMethods from '../../utility/UtilityMethods';

const Prompt = ({ onPress, leftTitle, rightTitle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {leftTitle}{' '}
                <TouchableOpacity onPress={onPress} style={styles.touchable}>
                    <Text style={styles.registerText}>
                        {rightTitle}
                    </Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: UtilityMethods.hp(2)
    },
    text: {
        fontSize: FontSize(12),
        color: Colors.RED,
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        paddingBottom: 7,
        height: UtilityMethods.hp(3),

    },
    touchable: {
        alignSelf: 'center',
        height: UtilityMethods.hp(3),
        // backgroundColor: 'green',
        justifyContent: 'flex-end'

    },
    registerText: {
        fontSize: FontSize(12),
        fontWeight: 'bold',
        color: Colors.RED,
        fontFamily: Fonts.SIGNIKA_BOLD,
        paddingTop: 5

    },
});

export default Prompt;

import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { Colors, Fonts, Icons } from '../../../assets';
import { FontSize } from '../../../utility/FontSize';

const SearchBar = ({ value, onChangeText, onSearch }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="¿Qué estás buscando?"
                    placeholderTextColor="#000"
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={onSearch}>
                <Image
                    source={Icons.SEARCH}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: Platform.OS == "android" ? 0 : 10,
    },
    input: {
        flex: 1,
        fontSize: FontSize(13),
        fontFamily: Fonts.SIGNIKA_LIGHT,
        color: '#000',
    },
    iconContainer: {
        marginLeft: 10,
        padding: 10,
        // backgroundColor: '#E0E0E0',
        borderRadius: 25,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: Colors.RED,
    },
});

export default SearchBar;

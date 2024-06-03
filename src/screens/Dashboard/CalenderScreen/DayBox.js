import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Colors, Fonts, Icons } from '../../../assets';
import UtilityMethods from '../../../utility/UtilityMethods';
import { requestGalleryPermission } from './Utils';
import { FontSize } from '../../../utility/FontSize';

const DayBox = ({ day, date, initialImage }) => {
    const [image, setImage] = useState(initialImage);
    console.log("image", typeof image)
    useEffect(() => {
        (async () => {
            const res = await requestGalleryPermission();
            if (!res) {
                Alert.alert("Permission Required", "Please allow permission to access gallery");
            }
        })();
    }, []);

    const pickImage = () => {
        UtilityMethods.selectImage(
            "gallary",
            (image) => {
                setImage(image?.path);
            },
            false
        );
    };

    return (
        <TouchableOpacity style={styles.container} onPress={pickImage}>
            <View style={styles.overlay}>
                <Text style={styles.text}>{day} - {date}</Text>
            </View>
            {image ? (
                <Image source={typeof image === 'string' && image.includes("Users") || typeof image === 'string' && image.includes("file") ? { uri: image } : image} style={styles.image} />
            ) : (
                <View style={styles.placeholder}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={Icons.PLUS}
                            style={styles.plusIcon}
                        />
                    </View>
                </View>
            )}

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 165,
        height: 165,
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        margin: 10,
        overflow: 'hidden',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    image: {
        width: '100%',
        height: '90%',
        marginTop: UtilityMethods.hp(4),
    },
    placeholder: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusIcon: {
        width: 30,
        height: 30,
        tintColor: 'gray',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: Colors.RED,
        paddingVertical: 5,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: FontSize(13),
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#E5E5E5",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 5,
    }
});

export default DayBox;

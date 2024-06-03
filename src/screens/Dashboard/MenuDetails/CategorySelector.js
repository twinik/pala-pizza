import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../assets';
import { FontSize } from '../../../utility/FontSize';

const categories = [
    { name: 'HAMBURGERS', id: 1 },
    { name: 'ARTESANALES', id: 2 },
    { name: 'TACOS', id: 3 },
    { name: 'PIZZERIA', id: 4 },
];

const CategorySelector = ({ onCategorySelect }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[1].name);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category.name);
        onCategorySelect(category.name);
    };

    return (
        <View style={styles.container}>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={[
                        styles.button,
                        selectedCategory === category.name && styles.selectedButton,
                    ]}
                    onPress={() => handleCategoryPress(category)}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            selectedCategory === category.name && styles.selectedButtonText,
                        ]}
                    >
                        {category.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    button: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 20,
        paddingVertical: 2,
        paddingHorizontal: 7,
        // marginHorizontal: 5,
        backgroundColor: 'white',
    },
    selectedButton: {
        backgroundColor: Colors.RED,
        borderWidth: 2,
        borderColor: Colors.RED,
    },
    buttonText: {
        color: 'green',
        fontFamily: Fonts.HERMAN,
        paddingTop: 3,
        fontSize: FontSize(10),

    },
    selectedButtonText: {
        fontSize: FontSize(12),
        color: 'white',
        fontFamily: Fonts.HERMAN,
        paddingTop: 2,
    },
});

export default CategorySelector;

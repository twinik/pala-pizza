import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '../../../assets';
import { FontSize } from '../../../utility/FontSize';

const CounterComponent = ({ title, initialCount = 1 }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={decrement} style={styles.counterButton}>
                    <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{count}</Text>
                <TouchableOpacity onPress={increment} style={styles.counterButton}>
                    <Text style={styles.counterButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    title: {
        fontSize: FontSize(18),
        fontFamily: Fonts.HERMAN,
        color: 'white',
        marginRight: 20,
        paddingTop: 5,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    counterButton: {
        paddingHorizontal: 10,
    },
    counterButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D32F2F',
    },
    counterText: {
        fontSize: FontSize(18),
        fontFamily: Fonts.HERMAN,
        fontWeight: 'bold',
        color: '#D32F2F',
        marginHorizontal: 10,
        paddingTop: 5,
    },

});

export default CounterComponent;

import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native';

const Wrapper = ({ children, style, backgroundColor }) => {
    const combinedStyles = [
        styles.default,
        { backgroundColor: backgroundColor || 'white' },
        style,
    ];

    return (
        <SafeAreaView style={combinedStyles}>
            <View style={styles.content}>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
    },
    content: {
        flex: 1,
    }
});

export default Wrapper;

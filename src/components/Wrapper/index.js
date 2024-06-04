import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';

const Wrapper = ({ children, style, backgroundColor, transparent, barStyle }) => {
    const combinedStyles = [
        styles.default,
        { backgroundColor: backgroundColor || 'white' },
        style,
    ];

    const Container = transparent ? View : SafeAreaView;

    return (
        <Container style={combinedStyles}>
            <StatusBar
                barStyle={barStyle ? barStyle : Platform.OS === 'ios' ? 'dark-content' : 'dark-content'}
                translucent={transparent}
                backgroundColor={transparent ? 'transparent' : backgroundColor || 'white'}
            />
            <View style={styles.content}>
                {children}
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    content: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});

export default Wrapper;

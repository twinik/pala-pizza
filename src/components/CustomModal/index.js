import React from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomModal = ({ visible, onClose, children, backdropStyle, containerStyle }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity style={[styles.backdrop, backdropStyle]} onPress={onClose}>
                <View style={[styles.modalContainer, containerStyle]}>
                    <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
                        {children}
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        // backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    modalContent: {
        padding: 20,
    },
});

export default CustomModal;

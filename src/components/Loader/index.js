import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Animations from '../../assets/animations/Animations';
import UtilityMethods from '../../utility/UtilityMethods';


const Loader = ({ visible }) => {
    return (
        <Modal
            transparent={true}
            animationType="none"
            visible={visible}
            onRequestClose={() => { }}
            statusBarTranslucent={true}
        >
            <View style={styles.modalBackground}>
                <View style={styles.loaderContainer}>
                    <LottieView
                        source={Animations.LOADING}
                        autoPlay
                        loop
                        style={styles.lottie}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        height: UtilityMethods.hp(100),
        width: UtilityMethods.wp(100),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loaderContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottie: {
        width: 150,
        height: 150,
    },
});

export default Loader;

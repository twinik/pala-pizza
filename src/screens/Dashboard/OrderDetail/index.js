import { View, StyleSheet, Image, ScrollView, ImageBackground, Alert, Platform, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, Icons, Images } from '../../../assets';
import Wrapper from '../../../components/Wrapper';
import UtilityMethods from '../../../utility/UtilityMethods';
import Loader from '../../../components/Loader';
import { useDispatch } from 'react-redux';
import OrderHeader from './OrderHeader';
import InfoRow from './InfoRow';
import AddressCard from './AddressCard';
import HorizontalItem from './HorizontalItem';
import ItemCard from './ItemCard';
import PrimaryButton from '../../../components/PrimaryButton';
import { FontSize } from '../../../utility/FontSize';
import CustomButton from '../../../components/CustomButton.js';
import Prompt from '../../../components/Prompt';
import Spacing from '../../../components/spacing';
import CustomModal from '../../../components/CustomModal';
import Routes from '../../../navigation/Routes';

const OrderDetail = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isModalVisible, setModalVisible] = useState(true);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleClosePress = () => {
        Alert.alert('Close button pressed!');
    };
    const handleEditPress = () => {
        Alert.alert('Edit button pressed!');
    };
    const onPressMakePayment = () => {
        Alert.alert('Payment button pressed!');
    };
    const onPressScheduleYourProducts = () => {
        Alert.alert('Schedule button pressed!');
    };
    const onPressCancel = () => {
        Alert.alert('Cancel button pressed!');
    };
    const onPressFinishPurchase = () => {
        navigation.navigate(Routes.CONTACT_US)
    };

    return (
        <Wrapper transparent>
            <Loader visible={loading} />
            <ImageBackground source={Images.RED_BACKGROUND} style={styles.background}>
                <ScrollView contentContainerStyle={styles.background}>
                    <View style={styles.header}>
                        <OrderHeader
                            title="DETALLES DE LA ORDEN"
                            orderId="84754823"
                            onBackPress={handleBackPress}
                            onClosePress={handleClosePress}
                        />
                        <InfoRow label="Fecha:" value="21 Sep, 2023" />
                        <InfoRow label="Total:" value="$ 1,500.00" />
                    </View>
                    <View style={styles.body}>
                        <AddressCard
                            address="Ave. Nuñez de Cáceres, el millón, Santo Domingo 10149"
                            recipient="Antoni Rosario."
                            phone="809-337-4562"
                            onEdit={handleEditPress}
                        />
                        <HorizontalItem
                            imageUrl={Images.PNG_PIZZA1}
                            title="Pizza Jalisco"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
                            quantity={1}
                            price={469}
                        />
                        <View style={styles.row}>
                            <ItemCard
                                imageUrl={Images.DRINK2}
                                title="COCA-COLA"
                                subtitle="SIN AZUCAR"
                                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
                                price={69}
                            />
                            <ItemCard
                                imageUrl={Images.DRINK4}
                                title="COCO A"
                                subtitle="A LA MODA"
                                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
                                price={395}
                            />
                        </View>
                        <Spacing size={5} />
                        <View style={styles.row}>
                            <CustomButton title="CANCELAR" onPress={onPressCancel} />
                            <CustomButton title="FINALIZAR COMPRA" onPress={onPressFinishPurchase} style={{ backgroundColor: "#E5E5E5" }} titleStyle={{ color: Colors.RED }} />
                        </View>
                        <Prompt onPress={onPressScheduleYourProducts} leftTitle={"Recuerda que puedes,"} rightTitle={"AGENDAR TUS PRODUCTOS"} containerStyle={styles.promptContainer} leftTextStyle={styles.leftText} rightTextStyle={styles.rightText} />
                    </View>
                </ScrollView>
            </ImageBackground>
            <CustomModal visible={isModalVisible} onClose={toggleModal} backdropStyle={styles.backdropStyle} containerStyle={styles.containerStyle}>
                <ImageBackground source={Images.PROMO4} style={styles.backgroundImage} resizeMode='contain'>
                    <View style={styles.row1}>
                        <CustomButton title="VER Menú DE POSTRES" onPress={toggleModal} numberOfLines={2} style={{ width: UtilityMethods.wp(35), borderRadius: 20 }} titleStyle={{ textAlign: 'center', fontSize: FontSize(12) }} />
                        <CustomButton title="Agrega éste a tu orden" onPress={toggleModal} numberOfLines={2} style={{ width: UtilityMethods.wp(35), borderRadius: 20 }} titleStyle={{ textAlign: 'center', fontSize: FontSize(12) }} />
                    </View>
                </ImageBackground>
            </CustomModal>
        </Wrapper>
    )
}

export { OrderDetail }

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    background: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        paddingTop: UtilityMethods.hp(1),
    },
    header: {
        flex: 0.24,
    },
    body: {
        flex: 0.8,
        backgroundColor: Colors.WHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    icon: {
        height: UtilityMethods.hp(20),
        width: UtilityMethods.wp(28),
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: "absolute",
        bottom: 30,
        width: "100%",
        paddingHorizontal: UtilityMethods.wp(45),
    },
    btn: {
        width: "40%",
        borderRadius: 90,
        backgroundColor: "#E5E5E5",
        alignSelf: 'center',
    },
    btnText: {
        color: Colors.RED,
        fontSize: FontSize(12),
        width: UtilityMethods.wp(30),
    },
    leftText: {
        color: Colors.BLACK,
        fontSize: FontSize(8),
    },
    rightText: {
        color: Colors.RED,
        fontSize: FontSize(8),
    },
    promptContainer: {
        marginTop: 5
    },
    btn1: {
        width: "50%",
        borderRadius: 90,
        backgroundColor: Colors.RED,
        alignSelf: 'center'
    },
    btnTex1: {
        color: Colors.WHITE,
    },
    leftText: {
        color: Colors.BLACK,
        fontSize: FontSize(8),
    },
    rightText: {
        color: Colors.RED,
        fontSize: FontSize(8),
    },
    promptContainer: {
        marginTop: 5
    },
    // Modal styles 
    backgroundImage: {
        width: UtilityMethods.hp(80),
        height: UtilityMethods.hp(42),
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 15,
        marginTop: UtilityMethods.hp(25),

    },
    closeButton: {
        position: "absolute",
        top: -8,
        right: -8,
        backgroundColor: "red",
        borderRadius: 100,
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButtonText: {
        height: 12,
        width: 12,
    },
    cartIcon: {
        height: 15,
        width: 15,
    },
    content: {
        alignItems: 'center',
        position: "absolute",
        bottom: 16,
        left: UtilityMethods.wp(10)
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    addButton: {
        marginTop: 20,
        backgroundColor: 'white',
        paddingVertical: 2,
        paddingHorizontal: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        fontSize: 14,
        color: 'green',
        fontFamily: Fonts.HERMAN,
        paddingTop: 3,
        marginRight: 10
    },
    backdropStyle: {
        justifyContent: null,
        alignItems: null,
    },
    containerStyle: {
        width: UtilityMethods.wp(100),
        overflow: null,
    }
})
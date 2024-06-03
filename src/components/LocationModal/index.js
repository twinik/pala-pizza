import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import { FontSize } from "../../utility/FontSize";
import { Colors, Fonts, Icons } from "../../assets";
import UtilityMethods from "../../utility/UtilityMethods";
import { CustomBottomSheet } from "../CustomBottomSheet";
import UserModalItem from "../UserModalItem";
import Spacing from "../spacing";
import LocationModalItem from "../LocationModalItem";
import PrimaryButton from "../PrimaryButton";

const data = [
    { id: '1', title: 'JOHAN HENRIQUEZ', subtitle: 'Edita tu perfil aquí.' },
    { id: '2', title: 'DIRECCIONES', subtitle: 'Agrega o elimina ubicaciones.' },
    { id: '3', title: 'TARJETA DE CRÉDITO', subtitle: 'Elige, agrega o elimina.' },
    { id: '4', title: 'SUCURSALES', subtitle: 'Conoces nuestros restaurantes.' },
    { id: '5', title: 'CERRAR SESIÓN', subtitle: '' },
];
export const LocationModal = ({
    sheetRef,
    onClose,
}) => {
    const [selectedAddress, setSelectedAddress] = useState(null);

    const addresses = [
        { id: '1', address: 'C/ Los Proceres' },
        { id: '2', address: 'C/ Proyecto #5' },
    ];

    const handlePress = (id) => {
        setSelectedAddress(id);
    };

    const onPressAddNewAddress = () => {
        // Handle add new address
        console.log('Add new address');
    }
    const onPressDownArrow = () => {
        onClose()
    }

    return (
        <CustomBottomSheet
            sheetRef={sheetRef}
            sheetIndex={-1}
            onClose={onClose}
            sheetSnapPoints={["30%", "50%", "90%"]}
            containerStyle={{ backgroundColor: Colors.WHITE }}
            handleIndicatorStyle={{ backgroundColor: Colors.DARKER_GRAY }}
            handleStyle={{ height: UtilityMethods.hp(2), }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: UtilityMethods.wp(5),
                }}
            >
                <TouchableOpacity onPress={onPressDownArrow}>
                    <Image source={Icons.DOWN_ARROW} style={styles.icon} resizeMode="contain" />
                </TouchableOpacity>
                <Spacing size={UtilityMethods.hp(1)} />
                <Text style={styles.titleText}>Direcciones</Text>
                <Spacing size={UtilityMethods.hp(1)} />
                <Text style={styles.subHeading}>¿Dónde quieres recibir tu pedido?</Text>
                <Spacing size={UtilityMethods.hp(1)} />
                {addresses.map((item) => (
                    <LocationModalItem
                        address={item.address}
                        selected={item.id === selectedAddress}
                        onPress={() => handlePress(item.id)}
                    />
                ))}
                <Spacing size={UtilityMethods.hp(1)} />
                <Text style={styles.otherLocation}>¿En otra dirección?</Text>
                <Spacing size={UtilityMethods.hp(2)} />
                <PrimaryButton title="agregar nueva dirección" onPress={onPressAddNewAddress} />
            </View>
        </CustomBottomSheet>
    );
};

const styles = StyleSheet.create({
    rowView: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleText: {
        fontSize: FontSize(18),
        fontFamily: Fonts.HERMAN,
        color: Colors.RED,
        alignSelf: "center",
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: Colors.DARKER_GRAY,
        alignSelf: "center",
    },
    subHeading: {
        fontSize: FontSize(16),
        color: Colors.RED,
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
        alignSelf: "center",
    },
    otherLocation: {
        fontSize: FontSize(16),
        color: Colors.RED,
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
    },
});

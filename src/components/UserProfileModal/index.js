import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    FlatList,
} from "react-native";
import React from "react";
import { FontSize } from "../../utility/FontSize";
import { Colors, Fonts, Icons } from "../../assets";
import UtilityMethods from "../../utility/UtilityMethods";
import { CustomBottomSheet } from "../CustomBottomSheet";
import UserModalItem from "../UserModalItem";
import Spacing from "../spacing";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/Reducers/AuthReducer";

const data = [
    { id: '1', title: 'JOHAN HENRIQUEZ', subtitle: 'Edita tu perfil aquí.' },
    { id: '2', title: 'DIRECCIONES', subtitle: 'Agrega o elimina ubicaciones.' },
    { id: '3', title: 'TARJETA DE CRÉDITO', subtitle: 'Elige, agrega o elimina.' },
    { id: '4', title: 'SUCURSALES', subtitle: 'Conoces nuestros restaurantes.' },
    { id: '5', title: 'CERRAR SESIÓN', subtitle: '', },
];
export const UserProfileModal = ({
    sheetRef,
    onClose,
}) => {
    const dispatch = useDispatch()
    const handlePress = (item) => {
        console.log('Item pressed:', item);
        if (item?.id == 5) {
            dispatch(setUser(null))
        }
    };

    const renderItem = ({ item, index }) => (
        <UserModalItem
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => handlePress(item)}
        />
    );
    const onPressDownArrow = () => {
        onClose()
    }

    return (
        <CustomBottomSheet
            sheetRef={sheetRef}
            sheetIndex={-1}
            onClose={onClose}
            sheetSnapPoints={["30%", "60%", "90%"]}
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
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
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
        color: Colors.BLACK,
        fontFamily: Fonts.SIGNIKA_BOLD,
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: Colors.DARKER_GRAY,
        alignSelf: "center",
    },
});

import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../redux/Reducers/AuthReducer';
import Wrapper from '../../../components/Wrapper';
import Loader from '../../../components/Loader';
import { Colors, Fonts, Icons, Images } from '../../../assets';
import UtilityMethods from '../../../utility/UtilityMethods';
import Spacing from '../../../components/spacing';
import { FontSize } from '../../../utility/FontSize';
import PrimaryButton from '../../../components/PrimaryButton';
import Routes from '../../../navigation/Routes';
import CustomModal from '../../../components/CustomModal';

const data = [
    {
        image: Images.LIST_ONE,
    },
    {
        image: Images.LIST_TWO,
    },
    {
        image: Images.LIST_THREE,
    },
    {
        image: Images.LIST_FOUR,
    },
]
const promos = [
    {
        image: Images.PROMO1,
    },
    {
        image: Images.PROMO2
    },
    {
        image: Images.PROMO3
    }
]

const MenuScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [promo, setPromo] = useState(promos);
    const [isModalVisible, setModalVisible] = useState(true);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const onAddToCart = () => {
    }
    const onPressRemovePromo = (index) => {
        setPromo(promo.filter((item, i) => i !== index))
        if (promo.length === 1) {
            setModalVisible(false)
        }
    }
    const onPressCard = (index) => {
        navigation.navigate(Routes.MENU_DETAILS)
    }
    return (
        <Wrapper>
            <Loader visible={loading} />
            <ImageBackground source={Images.BACKGROUND_LINE} style={styles.main}>
                <Image source={Icons.PIZZA3} style={styles.icon} resizeMode='contain' />
                <FlatList contentContainerStyle={styles.background}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => onPressCard(index)} style={styles.container}>
                                <Image source={item.image} style={styles.cardImage} resizeMode='contain' />
                            </TouchableOpacity>
                        )
                    }}
                    ListFooterComponent={<Spacing size={UtilityMethods.hp(5)} />}
                />
            </ImageBackground>
            <CustomModal visible={isModalVisible} onClose={toggleModal}>
                {promo.map((item, index) => (
                    <ImageBackground source={item?.image} style={styles.backgroundImage} resizeMode='contain'>
                        <TouchableOpacity style={styles.closeButton} onPress={() => onPressRemovePromo(index)}>
                            <Image style={styles.closeButtonText} source={Icons.CLOSE} tintColor={Colors.WHITE} />
                        </TouchableOpacity>
                        <View style={styles.content}>
                            <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
                                <Text style={styles.addButtonText}>COMPRAR</Text>
                                <Image style={styles.cartIcon} source={Icons.CART} tintColor={"#1D5632"} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                ))}
            </CustomModal>

        </Wrapper>
    )
}

export { MenuScreen }
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    icon: {
        height: UtilityMethods.hp(15),
        width: UtilityMethods.wp(75),
        alignSelf: 'center',
    },
    cardImage: {
        height: UtilityMethods.hp(17),
        width: UtilityMethods.wp(90),
        alignSelf: 'center',
    },
    container: {
        padding: 5,
        borderRadius: 15,
        alignItems: 'center',
        width: "60%",
        alignSelf: 'center',

    },
    btn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 15,
        marginVertical: 10
    },
    backgroundImage: {
        width: UtilityMethods.hp(25),
        height: UtilityMethods.hp(25),
        alignSelf: 'center',
        marginBottom: 10

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
})

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

const MenuScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isModalVisible, setModalVisible] = useState(true);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const onAddToCart = () => {
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
                            <TouchableOpacity onPress={toggleModal} style={styles.container}>
                                <Image source={item.image} style={styles.cardImage} resizeMode='contain' />
                            </TouchableOpacity>
                        )
                    }}
                    ListFooterComponent={<Spacing size={UtilityMethods.hp(5)} />}
                />
                <CustomModal visible={isModalVisible} onClose={toggleModal}>
                    <ImageBackground source={Images.PROMO1} style={styles.backgroundImage}>
                        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                            <Text style={styles.closeButtonText}>×</Text>
                        </TouchableOpacity>
                        <View style={styles.content}>
                            <Text style={styles.title}>PROMO</Text>
                            <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
                                <Text style={styles.addButtonText}>COMPRAR</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </CustomModal>
            </ImageBackground>

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
        width: UtilityMethods.hp(32),
        height: UtilityMethods.hp(32),
        // justifyContent: 'space-between',
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    closeButtonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    addButton: {
        marginTop: 20,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    addButtonText: {
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold',
    },
})

import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, Alert, Platform } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../redux/Reducers/AuthReducer';
import Wrapper from '../../../components/Wrapper';
import { Colors, Fonts, Icons, Images } from '../../../assets';
import UtilityMethods from '../../../utility/UtilityMethods';
import CounterComponent from './CounterComponent';
import { FontSize } from '../../../utility/FontSize';
import ProductCard from './ProductCard';
import PrimaryButton from '../../../components/PrimaryButton';
import Spacing from '../../../components/spacing';
import Prompt from '../../../components/Prompt';
import Routes from '../../../navigation/Routes';

const items = [
    {
        imageUrl: Images.DRINK1,
        title: '3LT',
        price: 'RD$800.00',
    },
    {
        imageUrl: Images.DRINK2,
        title: '500ML',
        price: 'RD$500.00',
    },
    {
        imageUrl: Images.DRINK3,
        title: '500ML',
        price: 'RD$500.00',
    }, {
        imageUrl: Images.DRINK4,
        title: '2LT',
        price: 'RD$500.00',
    },
]

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const onPressMakePayment = () => {
        navigation.navigate(Routes.ORDER_DETAILS)
    }
    const handleAddProduct = () => {
        Alert.alert('Product added to cart!');
    };
    const onPressScheduleYourProducts = () => {
        Alert.alert('Schedule your products!');
    }
    const onPressBack = () => {
        navigation.navigate(Routes.MENU_STACK)
    }
    return (
        <Wrapper>
            <View style={styles.main}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.backBtn} onPress={onPressBack} >
                        <Image source={Icons.BACK} style={styles.backIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeBtn} >
                        <Image source={Icons.CLOSE1} style={styles.closeIcon} />
                    </TouchableOpacity>
                    <Image source={Images.PNG_PIZZA1} style={styles.itemPicture} resizeMode='contain' />
                    <CounterComponent title="JALISCO" initialCount={1} />
                    <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</Text>
                    <Text style={styles.title}>aGREGAR A TU PEDIDO:</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 10, paddingHorizontal: 20 }}>
                        {items.map((item, index) => (
                            <ProductCard
                                imageUrl={item?.imageUrl} // Replace with your image URL
                                title={item?.title}
                                onAdd={handleAddProduct}
                            />
                        ))}
                    </View>
                </View>
                <Spacing size={UtilityMethods.hp(2)} />
                <PrimaryButton title={"realizar pago"} onPress={onPressMakePayment} style={styles.btn} titleStyle={styles.btnText} />
                <Prompt onPress={onPressScheduleYourProducts} leftTitle={"Recuerda que puedes,"} rightTitle={"AGENDAR TUS PRODUCTOS"} containerStyle={styles.promptContainer} leftTextStyle={styles.leftText} rightTextStyle={styles.rightText} />

            </View>
        </Wrapper>
    )
}

export { CartScreen }
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    top: {
        height: Platform.OS == 'android' ? UtilityMethods.hp(67) : UtilityMethods.hp(65),
        backgroundColor: Colors.RED,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    backBtn: {
        position: 'absolute',
        top: UtilityMethods.hp(5),
        left: UtilityMethods.wp(5)
    },
    backIcon: {
        height: UtilityMethods.hp(3.8),
        width: UtilityMethods.hp(3.8)
    },
    closeBtn: {
        position: 'absolute',
        top: UtilityMethods.hp(5),
        right: UtilityMethods.wp(5)
    },
    closeIcon: {
        height: UtilityMethods.hp(3.8),
        width: UtilityMethods.hp(3.8)
    },
    itemPicture: {
        height: UtilityMethods.hp(25),
        width: UtilityMethods.wp(80),
        alignSelf: 'center',
        marginTop: UtilityMethods.hp(3),
        zIndex: 1,
    },
    description: {
        fontSize: 14,
        color: 'white',
        marginVertical: 10,
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        textAlign: 'justify',
        lineHeight: 14,
        marginHorizontal: 25
    },
    title: {
        fontSize: FontSize(16),
        fontFamily: Fonts.HERMAN,
        color: 'white',
        marginRight: 20,
        paddingTop: 5,
        marginHorizontal: 25
    },
    btn: {
        width: "70%",
        borderRadius: 90,
        backgroundColor: "#E5E5E5",
        alignSelf: 'center'
    },
    btnText: {
        color: Colors.RED,
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
        // marginLeft: UtilityMethods.wp(10),
        marginTop: 5
    }

})
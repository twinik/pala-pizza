import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native'
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
import { BAR_STYLE } from '../../../utility/Constants';

const EnableLocationScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const onPressAddLocation = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigation.navigate(Routes.BOTTOM_TAB)
        }, 3000);
    }
    return (
        <Wrapper transparent barStyle={BAR_STYLE.LIGHT}>
            <Loader visible={loading} />
            <ImageBackground source={Images.RED_BACKGROUND} style={styles.main}>
                <Spacing size={UtilityMethods.hp(10)} />
                <Image source={Icons.HEADING_GET_STARTED} style={styles.icon1} resizeMode='contain' tintColor={Colors.WHITE} />
                <Spacing size={UtilityMethods.hp(5)} />
                <Text style={styles.title}>¿Dónde te encuentras?</Text>
                <Spacing size={UtilityMethods.hp(2)} />
                <View style={styles.container}>
                    <PrimaryButton titleStyle={{ color: Colors.RED, fontSize: FontSize(13) }} onPress={onPressAddLocation} title={"Agregar ubicación"} style={styles.btn} />
                    <Spacing size={UtilityMethods.hp(1)} />
                    <PrimaryButton titleStyle={{ color: Colors.RED, fontSize: FontSize(13) }} onPress={onPressAddLocation} title={"Habilitar mi ubicación"} style={styles.btn} />

                </View>
            </ImageBackground>
        </Wrapper>
    )
}

export { EnableLocationScreen }
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    icon1: {
        height: UtilityMethods.hp(10),
        width: UtilityMethods.hp(25),
        alignSelf: 'center',
    },
    title: {
        fontSize: FontSize(20),
        color: Colors.WHITE,
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
        textAlign: 'center',
    },
    container: {
        backgroundColor: Colors.DARK_RED,
        padding: 5,
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: "#5A0815",
        width: "60%",
        alignSelf: 'center',

    },
    btn: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: Colors.WHITE
    },
})

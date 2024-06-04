import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/Wrapper'
import { Icons, Images } from '../../../assets'
import UtilityMethods from '../../../utility/UtilityMethods'
import Spacing from '../../../components/spacing'
import PrimaryButton from '../../../components/PrimaryButton'
import Prompt from '../../../components/Prompt'
import Routes from '../../../navigation/Routes'

const GetStartedScreen = ({ navigation }) => {
    const onPressRegister = () => {
        navigation.navigate(Routes.SIGNUP_SCREEN)
    }
    const onPressLogin = () => {
        navigation.navigate(Routes.LOGIN_SCREEN)
    }

    return (
        <Wrapper transparent >
            <ImageBackground source={Images.GET_STARTED_BACKGROUND} style={styles.main}>
                <Spacing size={UtilityMethods.hp(4)} />
                <Image source={Icons.PIZZA1} style={styles.icon} resizeMode='contain' />
                <Spacing size={UtilityMethods.hp(1)} />
                <Image source={Icons.HEADING_GET_STARTED} style={styles.icon1} resizeMode='contain' />
                <Spacing size={UtilityMethods.hp(3)} />
                <PrimaryButton onPress={onPressLogin} title={"INICIAR SESION"} style={styles.btn} />
                <Prompt onPress={onPressRegister} leftTitle={"¿Aún no tienes cuenta?"} rightTitle={"Regístrate"} />
            </ImageBackground>
        </Wrapper>
    )
}

export { GetStartedScreen }

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    icon: {
        height: UtilityMethods.hp(23),
        width: UtilityMethods.wp(59),
        alignSelf: 'center',
    },
    icon1: {
        height: UtilityMethods.hp(10),
        width: UtilityMethods.hp(25),
        alignSelf: 'center',
    },
    btn: {
        width: "70%",
        borderRadius: 100
    }
})
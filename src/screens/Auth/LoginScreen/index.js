import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, Icons, Images } from '../../../assets';
import Wrapper from '../../../components/Wrapper';
import UtilityMethods from '../../../utility/UtilityMethods';
import White_text_box from '../../../components/white_text_box';
import Spacing from '../../../components/spacing';
import Label from '../../../components/Label';
import { FontSize } from '../../../utility/FontSize';
import PrimaryButton from '../../../components/PrimaryButton';
import Routes from '../../../navigation/Routes';
import Prompt from '../../../components/Prompt';
import Loader from '../../../components/Loader';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/Reducers/AuthReducer';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({
        errorEmail: "",
        errorPassword: "",
    });
    const onChangeEmailText = (_, value, errorName) => {
        setEmail(value);
    };

    const onChangePasswordText = (_, value, errorName) => {
        setPassword(value);
    };
    const onPressLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            dispatch(setUser({ name: 'ali' }))
        }, 3000);
        navigation.navigate(Routes.LOGIN_SCREEN)
    }
    const onPressRegister = () => {
        navigation.navigate(Routes.SIGNUP_SCREEN)
    }
    return (
        <Wrapper>
            <Loader visible={loading} />
            <ImageBackground source={Images.RED_BACKGROUND} style={styles.background}>
                <ScrollView contentContainerStyle={styles.background}>
                    <View style={styles.header}>
                        <Image source={Icons.PIZZA2} style={styles.icon} resizeMode='contain' />
                    </View>
                    <View style={styles.body}>
                        <Label text="Email" />
                        <Spacing size={2} />
                        <White_text_box
                            value={email}
                            name="email"
                            placeholder="Enter your email ID"
                            onChangeText={onChangeEmailText}
                            errorMessage={errorMessage.errorEmail}
                            errorName="errorEmail"
                            hasError={errorMessage.errorEmail}
                            keyboardType="email-address"

                        />
                        <Spacing size={UtilityMethods.hp(1)} />
                        <Label text="Contraseña" />
                        <Spacing size={2} />
                        <White_text_box
                            value={password}
                            name="password"
                            contextMenuHidden={true}
                            action="password"
                            secureTextEntry={true}
                            actionStyles={{ tintColor: "#ddd" }}
                            placeholder="Enter your password"
                            onChangeText={onChangePasswordText}
                            errorMessage={errorMessage.errorEmail}
                            errorName="errorEmail"
                            hasError={errorMessage.errorEmail}
                        />
                        <TouchableOpacity>
                            <Text style={styles.forgotPassword}>¿Contraseña olvidada?</Text>
                        </TouchableOpacity>
                        <Spacing size={15} />
                        <PrimaryButton onPress={onPressLogin} title={"INICIAR SESION"} style={styles.btn} />
                        <Spacing size={5} />
                        <Text style={styles.zero}>0</Text>
                        <Spacing size={5} />
                        <View style={styles.row}>
                            <Image source={Icons.APPLE} style={styles.socialIcon} resizeMode='contain' />
                            <Image source={Icons.FACEBOOK} style={styles.socialIcon} resizeMode='contain' />
                            <Image source={Icons.GOOGLE} style={styles.socialIcon} resizeMode='contain' />
                        </View>
                        <Spacing size={10} />
                        <Prompt onPress={onPressRegister} leftTitle={"¿Aún no tienes cuenta?"} rightTitle={"Regístrate"} />

                    </View>
                </ScrollView>
            </ImageBackground>

        </Wrapper>
    )
}

export { LoginScreen }

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 2,
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
    forgotPassword: {
        fontSize: FontSize(12),
        color: Colors.BLACK,
        fontFamily: Fonts.SIGNIKA_LIGHT,
        textAlign: 'right',
        marginTop: 5
    },
    btn: {
        width: "70%",
        borderRadius: 100
    },
    zero: {
        fontSize: FontSize(30),
        color: Colors.BLACK,
        fontFamily: Fonts.SIGNIKA_MEDIUM,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    socialIcon: {
        height: UtilityMethods.hp(6),
        width: UtilityMethods.hp(6)
    }
})
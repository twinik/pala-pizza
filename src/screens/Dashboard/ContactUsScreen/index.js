import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from '../../../components/Wrapper';
import Loader from '../../../components/Loader';
import { Colors, Fonts, Icons } from '../../../assets';
import UtilityMethods from '../../../utility/UtilityMethods';
import Spacing from '../../../components/spacing';
import { FontSize } from '../../../utility/FontSize';
import CustomButton from '../../../components/CustomButton.js';
import RecallButton from './RecallButton';

const ContactUsScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const onPressNeedHelp = () => {
        const email = 'mailto:palapizza@gmail.com'
        const subject = 'subject=Need Help'
        const body = 'body=Please help me with my order'
        try {
            Linking.openURL(`${email}?${subject}&${body}`)
        }
        catch (error) {
            console.log("Error in opening email", error)
        }
    }
    const onPressRedireccionar = () => {
        const phoneNumber = 'tel:+923000000000'
        try {
            Linking.openURL(phoneNumber)
        }
        catch (error) {
            console.log("Error in opening phone number", error)
        }
    }
    return (
        <Wrapper backgroundColor={Colors.RED}>
            <Loader visible={loading} />
            <View style={styles.main}>
                <Spacing size={UtilityMethods.hp(10)} />
                <Image source={Icons.CONTACT_US} style={styles.icon1} resizeMode='contain' tintColor={Colors.WHITE} />
                <Spacing size={UtilityMethods.hp(1)} />
                <Text style={styles.text}>En un estimado de 45 minutos tu pedido está llegando.</Text>
                <Spacing size={UtilityMethods.hp(3)} />
                <CustomButton title="¿Necesitas ayuda?" onPress={onPressNeedHelp} style={{ backgroundColor: Colors.WHITE, width: UtilityMethods.wp(60), alignSelf: 'center' }} titleStyle={{ color: Colors.RED }} />
                <Spacing size={UtilityMethods.hp(1)} />
                <RecallButton
                    title="Redireccionar al Call Center"
                    onPress={onPressRedireccionar}
                    icon={{ uri: 'https://img.icons8.com/ios-filled/50/000000/headset.png' }} // Replace with your icon URL
                />
                <Spacing size={UtilityMethods.hp(3.5)} />
                <Image source={Icons.DINNER} style={styles.dinnerIcon} resizeMode='contain' tintColor={Colors.WHITE} />

            </View>
        </Wrapper>
    )
}

export { ContactUsScreen }
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.RED,
    },
    icon1: {
        height: UtilityMethods.hp(10),
        width: UtilityMethods.hp(25),
        alignSelf: 'center',
    },
    text: {
        fontSize: FontSize(12),
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    dinnerIcon: {
        height: UtilityMethods.hp(10),
        width: UtilityMethods.hp(10),
        alignSelf: 'center',
    }
})

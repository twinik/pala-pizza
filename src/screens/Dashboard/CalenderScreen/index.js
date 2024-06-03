import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from '../../../components/Wrapper';
import Loader from '../../../components/Loader';
import { Fonts, Icons, Images } from '../../../assets';
import UtilityMethods from '../../../utility/UtilityMethods';
import { FontSize } from '../../../utility/FontSize';
import Spacing from '../../../components/spacing';
import DayBox from './DayBox';


const daysData = [
    { id: 1, day: 'Lunes', date: '16', image: Images.CALENDAR_IMAGE },
    { id: 2, day: 'Martes', date: '17', image: null },
    { id: 3, day: 'Miércoles', date: '18', image: null },
    { id: 4, day: 'Jueves', date: '19', image: null },
    { id: 5, day: 'Viernes', date: '20', image: null },
];
const CalenderScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    return (
        <Wrapper>
            <Loader visible={loading} />
            <ImageBackground source={Images.BACKGROUND} style={styles.main}>
                <Spacing size={UtilityMethods.hp(1)} />
                <Image source={Icons.PIZZA3} style={styles.icon} resizeMode='contain' />
                <Text style={styles.text}>¡Deja tu comida lista para la semana!</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', paddingHorizontal: 10 }}>
                    {daysData.map((item, index) => (
                        <DayBox
                            key={item.id}
                            day={item.day}
                            date={item.date}
                            initialImage={item.image}
                        />
                    ))}
                </View>
            </ImageBackground>


        </Wrapper>
    )
}

export { CalenderScreen }
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    icon: {
        height: UtilityMethods.hp(12),
        width: UtilityMethods.wp(75),
        alignSelf: 'center',
    },
    text: {
        fontSize: FontSize(13),
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
        textAlign: 'center',
        color: 'black',
        // marginTop: 5
    }

})

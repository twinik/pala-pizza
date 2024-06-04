import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, FlatList, Button, Alert, Platform, StatusBar } from 'react-native'
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
import CategorySelector from './CategorySelector';
import HorizontalItemCard from './HorizontalItemCard';
import VerticalItem from './VerticalItem';

const verticalData = [
    {
        imageUrl: Images.PNG_PIZZA2,
        title: 'JALISCO',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        price: 'RD$800.00',
    },
    {
        imageUrl: Images.PNG_PIZZA3,
        title: 'GAMBERETTO',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        price: 'RD$800.00',
    },
];

const MenuDetails = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log('Selected Category:', category);
    };
    const handleAddToCart = () => {
        navigation.navigate(Routes.CART_STACK, {
            screen: Routes.CART_SCREEN
        })
    };
    return (
        <Wrapper transparent>
            <Loader visible={loading} />
            <ImageBackground source={Images.BACKGROUND} style={styles.main}>
                <Image source={Icons.PIZZA1} style={styles.icon} resizeMode='contain' />
                <CategorySelector onCategorySelect={handleCategorySelect} />
                <HorizontalItemCard
                    imageUrl={Images.PNG_PIZZA1}
                    title="JALISCO"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                    price="RD$800.00"
                    onAddToCart={handleAddToCart}
                />
                <View style={styles.row}>
                    {verticalData.map((item, index) => (
                        <VerticalItem
                            imageUrl={Images.PNG_PIZZA2}
                            title="GAMBERETTO"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                            price="RD$800.00"
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </View>
            </ImageBackground>


        </Wrapper>
    )
}

export { MenuDetails }
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    icon: {
        height: UtilityMethods.hp(10),
        width: UtilityMethods.wp(20),
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // paddingHorizontal: 20,
        flexWrap: 'wrap',
        marginTop: UtilityMethods.hp(3)
    },
})

import { ImageBackground, StyleSheet, Image, View, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from '../../../components/Wrapper';
import Loader from '../../../components/Loader';
import { Fonts, Icons, Images } from '../../../assets';
import UtilityMethods from '../../../utility/UtilityMethods';
import { FontSize } from '../../../utility/FontSize';
import Spacing from '../../../components/spacing';
import SearchBar from './SearchBar';
import MenuItem from './MenuItem';

const menuData = [
    {
        id: 1,
        image: Images.SEARCH_ITEM1,
        title: 'Calzón 4 Quesos',
        description: 'Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer',
        price: 418,
    },
    {
        id: 2,
        image: Images.SEARCH_ITEM2,
        title: 'Ensalada Caribeña',
        description: 'Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer',
        price: 378,
    }, {
        id: 3,
        image: Images.SEARCH_ITEM3,
        title: 'Cheesy Garlic Bread',
        description: 'Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer',
        price: 297,
    }, {
        id: 4,
        image: Images.SEARCH_ITEM4,
        title: 'Cheeseburger Pala Pizza',
        description: 'Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer',
        price: 387,
    },
];

const SearchScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        Alert.alert('Search Query', searchQuery);
    };
    const handleAddPress = () => {
        Alert.alert('Item added to cart!');
    };
    return (
        <Wrapper>
            <Loader visible={loading} />
            <ImageBackground source={Images.BACKGROUND} style={styles.main}>
                <Spacing size={UtilityMethods.hp(2)} />
                <Image source={Icons.PIZZA1} style={styles.icon} resizeMode='contain' />
                <Spacing size={UtilityMethods.hp(1)} />
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSearch={handleSearch}
                />
                <Spacing size={UtilityMethods.hp(1)} />
                <View style={styles.body}>
                    <FlatList
                        data={menuData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <MenuItem
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                onAdd={handleAddPress}
                            />
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={styles.separator} />
                        )}
                        ListFooterComponent={<Spacing size={UtilityMethods.hp(5)} />}
                    />

                </View>
            </ImageBackground>


        </Wrapper>
    )
}

export { SearchScreen }
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    icon: {
        height: UtilityMethods.hp(6),
        width: UtilityMethods.wp(50),
        alignSelf: 'center',
    },
    text: {
        fontSize: FontSize(13),
        fontFamily: Fonts.SIGNIKA_SEMI_BOLD,
        textAlign: 'center',
        color: 'black',
    },
    body: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
    },
    separator: {
        height: 1,
        backgroundColor: '#E5E5E5',
        width: '85%',
        alignSelf: 'center',
    },
})

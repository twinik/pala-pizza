import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { Colors, Icons } from '../../assets';
import UtilityMethods from '../../utility/UtilityMethods';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const iconSource = options.tabBarIcon
                    ? options.tabBarIcon({ color: Colors.GREY_ICON, focused: isFocused })
                    : null;

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabButton}
                    >
                        <Image
                            source={iconSource.props.source}
                            style={[
                                styles.icon,
                                isFocused ? styles.iconFocused : null,
                            ]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        borderTopWidth: 1,
        borderTopColor: '#DDDDDD',
        // paddingTop: Platform.OS === 'ios' ? UtilityMethods.hp(3) : 0,
        height: Platform.OS === 'ios' ? UtilityMethods.hp(6) : UtilityMethods.hp(6),
        justifyContent: 'space-around',
        alignItems: 'center',
        width: UtilityMethods.wp(70),
        position: 'absolute',
        bottom: UtilityMethods.hp(5),
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconFocused: {
        width: 40,
        height: 40,
    },

});

export default CustomTabBar;

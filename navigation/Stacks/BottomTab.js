import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "../Routes";
import {
    HomeScreen
} from "../../screens";
import {
    View,
    Image,
    TouchableNativeFeedback, Platform,
    StyleSheet
} from "react-native";
import { Colors, Icons } from "../../assets";
import UtilityMethods from "../../utility/UtilityMethods";
import { MenuScreen } from "../../screens/Dashboard/MenuScreen";
import CustomTabBar from "../../components/CustomTabBar";
import { SearchScreen } from "../../screens/Dashboard/SearchScreen";
import { CartScreen } from "../../screens/Dashboard/Cart";
import { EnableLocationScreen } from "../../screens/Dashboard/EnableLocationScreen";
const Tab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress }) => {
    const content = <View style={styles.tabButton}>{children}</View>;

    return (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple("rgba(0, 0, 0, 0.2)", true)}
        >
            {content}
        </TouchableNativeFeedback>
    )
};

const BottomTabs = () => {
    return (

        <Tab.Navigator
            initialRouteName={Routes.MENU_SCREEN}
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Colors.WHITE,
                    borderTopWidth: 1,
                    borderTopColor: "#DDDDDD",
                    paddingTop: Platform.OS == "ios" ? UtilityMethods.hp(3) : null,
                    height: Platform.OS == "ios" ? UtilityMethods.hp(0) : UtilityMethods.hp(7),

                },
            }}
            labeled={false}
        >
            <Tab.Screen
                name={Routes.ENABLE_LOCATION}
                component={EnableLocationScreen}
                options={{
                    // tabBarLabel: "Home",
                    tabBarButton: (props) => <CustomTabButton {...props} />,
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? Icons.LOCATION_ACTIVE : Icons.LOCATION}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tab.Screen
                options={{
                    tabBarButton: (props) => <CustomTabButton {...props} />,
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? Icons.CALENDAR_ACTIVE : Icons.CALENDAR}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? Colors.PINK : Colors.GREY_ICON,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
                name={Routes.HOME_SCREEN}
                component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    tabBarButton: (props) => <CustomTabButton {...props} />,
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? Icons.SEARCH_ACTIVE : Icons.SEARCH}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? Colors.PINK : Colors.GREY_ICON,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
                name={Routes.SEARCH_SCREEN}
                component={SearchScreen}
            />
            <Tab.Screen
                options={{
                    tabBarButton: (props) => <CustomTabButton {...props} />,
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? Icons.CART_ACTIVE : Icons.CART}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? Colors.PINK : Colors.GREY_ICON,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
                name={Routes.CART_SCREEN}
                component={CartScreen}
            />
            <Tab.Screen
                options={{
                    tabBarButton: (props) => <CustomTabButton {...props} />,
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={focused ? Icons.MENU_ACTIVE : Icons.MENU}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? Colors.PINK : Colors.GREY_ICON,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
                name={Routes.MENU_SCREEN}
                component={MenuScreen}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: Colors.WHITE,
        borderTopWidth: 1,
        borderTopColor: "#DDDDDD",
    },
    tabButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 30,
        height: 30,

    },
    iconFocused: {
        width: 30,
        height: 30,
    },
});

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
    StyleSheet,
    Alert,
    BackHandler
} from "react-native";
import { Colors, Icons } from "../../assets";
import UtilityMethods from "../../utility/UtilityMethods";
import { MenuScreen } from "../../screens/Dashboard/MenuScreen";
import CustomTabBar from "../../components/CustomTabBar";
import { SearchScreen } from "../../screens/Dashboard/SearchScreen";
import { CartScreen } from "../../screens/Dashboard/Cart";
import { EnableLocationScreen } from "../../screens/Dashboard/EnableLocationScreen";
import { MenuStack } from "./MenuStack";
import { CartStack } from "./CartStack";
import { CalenderScreen } from "../../screens/Dashboard/CalenderScreen";
import { UserProfileModal } from "../../components/UserProfileModal";
import { LocationModal } from "../../components/LocationModal";

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

const BottomTabs = ({ navigation }) => {
    const userModalRef = React.useRef();
    const locationModalRef = React.useRef();
    React.useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(Routes.MENU_SCREEN);
        }, 0);
        return () => clearTimeout(timer);
    }, []);
    //  on Press hardware back button on android go to Enable location screen
    React.useEffect(() => {
        const backAction = () => {

            navigation.navigate(Routes.ENABLE_LOCATION);
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);
    return (
        <>
            <Tab.Navigator
                initialRouteName={Routes.MENU_STACK}
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
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            locationModalRef?.current?.present();
                        },
                    })}
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
                    name={Routes.CALENDAR_SCREEN}
                    component={CalenderScreen}
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
                    name={Routes.CART_STACK}
                    component={CartStack}
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
                    name={Routes.MENU_STACK}
                    component={MenuStack}
                />
                <Tab.Screen
                    options={{
                        tabBarButton: (props) => <CustomTabButton {...props} />,
                        tabBarIcon: ({ color, focused }) => (
                            <Image
                                source={focused ? Icons.USER_ACTIVE : Icons.USER}
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
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            userModalRef?.current?.present();
                            console.log("userModalRef", userModalRef?.current);
                        },
                    })}
                />
            </Tab.Navigator>
            <UserProfileModal
                sheetRef={userModalRef}
                onClose={() => {
                    userModalRef?.current?.close();
                }}
            />
            <LocationModal
                sheetRef={locationModalRef}
                onClose={() => {
                    locationModalRef?.current?.close();
                }}
            />
        </>
    );
};

export default BottomTabs;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: Colors.WHITE,
        borderTopWidth: 1,
        borderTopColor: "#DDDDDD",
        zIndex: 1000,
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

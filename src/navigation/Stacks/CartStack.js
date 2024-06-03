import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../../screens';
import Routes from '../Routes';
import { EnableLocationScreen } from '../../screens/Dashboard/EnableLocationScreen';
import BottomTabs from './BottomTab';
import { MenuScreen } from '../../screens/Dashboard/MenuScreen';
import { MenuDetails } from '../../screens/Dashboard/MenuDetails';
import { CartScreen } from '../../screens/Dashboard/Cart';
import { OrderDetail } from '../../screens/Dashboard/OrderDetail';
import { ContactUsScreen } from '../../screens/Dashboard/ContactUsScreen';


const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false

        }}>
            <Stack.Screen name={Routes.CART_SCREEN} component={CartScreen} />
            <Stack.Screen name={Routes.ORDER_DETAILS} component={OrderDetail} />
            <Stack.Screen name={Routes.CONTACT_US} component={ContactUsScreen} />
        </Stack.Navigator>
    )
}

export { CartStack };

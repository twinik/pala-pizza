import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../../screens';
import Routes from '../Routes';
import { EnableLocationScreen } from '../../screens/Dashboard/EnableLocationScreen';
import BottomTabs from './BottomTab';
import { MenuScreen } from '../../screens/Dashboard/MenuScreen';
import { MenuDetails } from '../../screens/Dashboard/MenuDetails';


const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false

        }}>
            <Stack.Screen name={Routes.MENU_SCREEN} component={MenuScreen} />
            <Stack.Screen name={Routes.MENU_DETAILS} component={MenuDetails} />
        </Stack.Navigator>
    )
}

export { MenuStack };

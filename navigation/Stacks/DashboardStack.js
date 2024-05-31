import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../../screens';
import Routes from '../Routes';
import { EnableLocationScreen } from '../../screens/Dashboard/EnableLocationScreen';
import BottomTabs from './BottomTab';


const Stack = createNativeStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false

        }}>
            <Stack.Screen name={Routes.ENABLE_LOCATION} component={EnableLocationScreen} />
            <Stack.Screen name={Routes.BOTTOM_TAB} component={BottomTabs} />
        </Stack.Navigator>
    )
}

export { DashboardStack };

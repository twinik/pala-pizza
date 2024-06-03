import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen, SignupScreen } from '../../screens';
import Routes from '../Routes';
import { GetStartedScreen } from '../../screens/Auth/GetStarted';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false

        }}>
            <Stack.Screen name={Routes.GET_STARTED_SCREEN} component={GetStartedScreen} />
            <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={Routes.SIGNUP_SCREEN} component={SignupScreen} />
        </Stack.Navigator>
    )
}

export { AuthStack };

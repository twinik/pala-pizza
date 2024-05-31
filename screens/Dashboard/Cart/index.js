import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../redux/Reducers/AuthReducer';

const CartScreen = () => {
    const dispatch = useDispatch();
    const loginUser = () => {
        dispatch(setUser(null))
    }
    return (
        <SafeAreaView>
            <Text>CartScreen</Text>
            <TouchableOpacity onPress={loginUser}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { CartScreen }
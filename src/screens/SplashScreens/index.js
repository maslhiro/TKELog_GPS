import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ImageBackground, Image } from 'react-native'
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
import img_logo from '../../assets/img_logo.png'
import AsyncStorage from '@react-native-community/async-storage';

export function SplashScreen() {
    const { navigate } = useNavigation()
    const [showLoading, setShowLoading] = useState(false)
    const [token, setToken] = useState(null)

    checkToken = async () => {
        try {
            let TKELog_Token = await AsyncStorage.getItem("@TKEToken:key")
            setToken(TKELog_Token)
            if (!TKELog_Token) {
                navigate("SignIn")
            } else {
                navigate("Noti")
            }
        } catch (error) {
            console.log("Error Get TKELog Token Key : ", error)
        }

    }

    useEffect(
        () => {
            let timer = setTimeout(() => {
                setShowLoading(true);
                checkToken()

            }, 2000)


    // this will clear Timeout when component unmont like in willComponentUnmount
    return () => {
        clearTimeout(timer)
    }
},
[] //useEffect will run only one time
         //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
    )
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={img_logo} style={{ width: 250, height: 250 }} resizeMode='contain' />
    </View>
)


}
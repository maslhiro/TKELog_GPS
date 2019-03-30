import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from 'react-navigation-hooks'
import AsyncStorage from '@react-native-community/async-storage';
import img_bg from '../../assets/img_bg.png'
import { API_URL_DANG_NHAP } from '../../commons'

export function SignInScreen(props) {
    const [userName, setUsername] = useState("")
    const [passWord, setPassword] = useState("")
    const { navigate } = useNavigation();

    onPress_Dang_Nhap = async () => {
        try {
            let url_Dang_Nhap = API_URL_DANG_NHAP.concat(`&Ma_Dang_Nhap=${encodeURIComponent(String(userName))}&Mat_Khau=${(passWord)}`)

            let response = await fetch(
                url_Dang_Nhap,
            );

            if (response.status !== 200) return Alert.alert("Thông báo", JSON.stringify(error));

            let responseText = await response.text();
            console.log("Reponse Dang Nhap : ", responseText)

            if (responseText) {
                let TKELog_GPS_Token = responseText
                AsyncStorage.setItem('@TKEToken:key', TKELog_GPS_Token)
                navigate("Noti")
            }
            else Alert.alert("Thông báo", "Reponse trả vể rỗng")

        } catch (error) {
            console.log("Error Dang Nhap ", error)
            Alert.alert("Thông báo", JSON.stringify(error))
        }

    }

    return (
        <ImageBackground style={{ flex: 1, justifyContent: 'flex-end' }} source={img_bg} resizeMode='cover'>
            <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'flex-end' }}>
            </View>
            <View style={{ flex: 3, justifyContent: 'center', backgroundColor:'white', margin:20, borderRadius:5 }}>
                <Text style={{ marginLeft: 20, color: 'black' }}>Mã Đăng Nhập</Text>
                <TextInput
                    style={{ height: 50, backgroundColor: '#dddddd', margin: 20, borderRadius: 5, fontSize: 16 }}
                    onChangeText={(text) => setUsername(text)} />

                <Text style={{ marginLeft: 20, color: 'black' }}>Mật Khẩu</Text>
                <TextInput
                    secureTextEntry={true}
                    style={{ height: 50, backgroundColor: '#dddddd', margin: 20, borderRadius: 5, fontSize: 16 }}
                    onChangeText={(text) => setPassword(text)} />
                <Button
                    buttonStyle={{ backgroundColor: "#204397" }}
                    containerStyle={{ margin: 20 }}
                    title="Đăng Nhập"
                    onPress={() => onPress_Dang_Nhap()}
                />
                <Text style={{ fontSize: 11, alignSelf: 'center' }}>©2017 TKELog GPS - Giải pháp quản lý thông tin hành trình</Text>
                <Text style={{ fontSize: 11, alignSelf: 'center' }}>Thiết kế và phát triển bởi TKSolution - Version 1.0.0.</Text>
            </View>

        </ImageBackground>
    )

}
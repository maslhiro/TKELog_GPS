import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'

export class SignInScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent:'center' }}>
                <Text style={{ marginLeft: 20 }}>Tên Đăng Nhập</Text>
                <TextInput
                    style={{ height: 50, backgroundColor: '#cdffeb', margin: 20, borderRadius: 5, fontSize: 16 }} />

                <Text style={{ marginLeft: 20 }}>Mật Khẩu</Text>
                <TextInput
                    secureTextEntry={true}
                    style={{ height: 50, backgroundColor: '#cdffeb', margin: 20, borderRadius: 5, fontSize: 16 }} />
                <Button
                    buttonStyle={{backgroundColor:"#07456f"}}
                    containerStyle={{margin: 20}}
                    title="Đăng Nhập"
                />
            </View>
        )
    }
}


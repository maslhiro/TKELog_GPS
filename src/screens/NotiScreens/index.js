import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, BackHandler } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons"
import { Header, ListenMess,ListNoti  } from '../../components'

export class NotiScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' ,backgroundColor: '#dddddd',}}>
                <Header
                    title="THÔNG BÁO" />
                <ListNoti/>
            </View>
        )
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }
}


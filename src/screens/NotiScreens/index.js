import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, BackHandler } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from 'react-navigation-hooks'

import { Header, ListenMess,ListNoti  } from '../../components'

export class NotiScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' ,backgroundColor: '#dddddd',}}>
                <Header
                    title="THÔNG BÁO" 
                    showLeftIcon={false}
                    onPressRightIcon={()=>{this.props.navigation.navigate("SignIn")}}
                    rightIcon={<Icon name="ios-log-out" size={30} color='white'/>}/>
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


import React, { Component } from 'react'
import {View, Text, FlatList} from 'react-native'
import {Header, ListenMess} from '../../components'

export class HomeScreen extends Component {
  render() {
    // console.log("Home :", ListenMess)
    return (
        <View style={{flex:1}}>
            <Header/>
            {/* <FlatList
              style={{flex : 1}}
              data= {ListenMess}
              renderItem={({item}) => <Text>{item.Auto_ID}</Text>}
            /> */}
            </View>
    )
  }
}
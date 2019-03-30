import React, { useEffect, useState } from 'react'
import { Text, FlatList, View, Alert } from 'react-native'
import type { Notification } from 'react-native-firebase'
import {API_URL_GET_NOTI} from '../../commons'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage';
import moment from "moment";
export function ListNoti() {
  const [message, setMessage] = useState([])
  const [loading, setLoading] = useState(false)
  getDataNoti = async() => {
    try {
      let TKELog_Token = await AsyncStorage.getItem("@TKEToken:key")
      let url_Get_Noti = API_URL_GET_NOTI.concat(`&TKELog_GPS_Token=${(String(TKELog_Token))}`)

      let response = await fetch(
        url_Get_Noti,
      );

      if (response.status !== 200) return Alert.alert("Thông báo", "Có lỗi trong quá trình kết nối");

      let responseJson = await response.json();

      let newData = responseJson.map((item)=>{
        let item_temp = item;
        let time = moment(item.Noi_Dung.slice(0,item.Noi_Dung.indexOf("Xe")-2),"DD-MM-YYYY HH:mm:ss")
        item_temp.Noi_Dung = item_temp.Noi_Dung.slice(item.Noi_Dung.indexOf("Xe"),item.Noi_Dung.lenght)
        console.log("Time",time)
        var now = moment(new Date()); //todays date
        var duration = moment.duration(now.diff(time));
        item_temp.Thoi_Gian =  (duration.asHours())
        return item_temp
      })
      console.log("Reponse Data Noti : ", newData)
      setMessage(responseJson)

  } catch (error) {
      console.log("Error Get Data Noti ", error)
      Alert.alert("Thông báo", "Có lỗi trong quá trình kết nối");  }
  }

  useEffect(()=>{
    getDataNoti()
  },[])

  renderItem = (item) => {
    return <View style={{ backgroundColor: 'white', marginHorizontal: 10, marginVertical: 10, borderRadius: 5, padding: 5}}>
       <View style={{ flex: 2}}>
        <Text style={{color:'#204397', fontSize: 15, fontWeight:'bold'}}> {item.Thoi_Gian} tiếng trước</Text>
        <View style={{height:1,backgroundColor:'black'}}/>
      </View>
      <View style={{ flex: 3}}>
      <Text style={{color:'black', fontSize: 15}}>Nội Dung : {item.Noi_Dung}</Text>
      
      </View>
    </View>
  }

  onRefresh = () => {
    setLoading(true)
    getDataNoti()
    setLoading(false)
  }

  return <FlatList
    refreshing={loading}
    onRefresh={()=>onRefresh()}
    keyExtractor={(item) => String(item.Auto_ID)}
    style={{ flex: 1, backgroundColor:'#FFFFF' }}
    data={message}
    renderItem={({ item }) => renderItem(item)}
  />
}

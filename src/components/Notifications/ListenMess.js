import React, { useEffect, useState } from 'react'
import { Text, FlatList, View } from 'react-native'
import type { Notification } from 'react-native-firebase'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/Ionicons'

const channel = new firebase.notifications.Android.Channel('TKELog', 'TKELog', firebase.notifications.Android.Importance.Max)
  .setDescription("TKELog's channel");

// Create the channel
firebase.notifications().android.createChannel(channel);
firebase.messaging().subscribeToTopic("All")

export function ListenMess() {
  const [message, setMessage] = useState([])

  firebase.notifications().onNotification((notification: Notification) => {
    console.log("Noti : ", notification)
    notification.android.setChannelId(channel.channelId)
    notification.android.setSmallIcon('@drawable/ic_car')
    firebase.notifications().displayNotification(notification)

    setMessage([...message, notification.data])
  })


  renderItem = (item) => {
    return <View style={{ backgroundColor: '#cdffeb', marginHorizontal: 20, marginVertical: 10, borderRadius: 5, padding: 5, flexDirection: 'row' }}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="md-car" size={30} color="#009f9d" />
      </View>
      <View style={{ flex: 7 }}>
        <Text>Số Xe : {item.So_Xe}</Text>
        <Text>Trạng Thái : {item.Trang_Thai_ID}</Text>
        <Text>Địa Điểm : {item.Ten_Dia_Diem}</Text>
      </View>
    </View>
  }

  // return <FlatList
  //   keyExtractor={(item) => item.Auto_ID}
  //   style={{ flex: 1, backgroundColor:'#FFFFF' }}
  //   data={message}
  //   renderItem={({ item }) => renderItem(item)}
  // />
  return null
}

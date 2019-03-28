import React , {useEffect, useState} from 'react'
import {Text, FlatList} from 'react-native'
import type { Notification } from 'react-native-firebase'
import firebase from 'react-native-firebase'

const channel = new firebase.notifications.Android.Channel('TKELog', 'TKELog', firebase.notifications.Android.Importance.Max)
  .setDescription("TKELog's channel");

// Create the channel
firebase.notifications().android.createChannel(channel);
firebase.messaging().subscribeToTopic("All")

export function ListenMess(){
    const [message, setMessage] = useState([])

    useEffect(()=>{
      firebase.notifications().onNotification((notification: Notification) => {
        console.log("Noti : ",notification)
        setMessage([...message,notification.data])
        // setMessage(mess.push(JSON.stringify(notification.data.token)))
        // Process your notification as required
    })
    },[])

    return  <FlatList
    style={{flex : 1}}
    data= {message}
    renderItem={({item}) => <Text>{item.Auto_ID}</Text>}
  />
}

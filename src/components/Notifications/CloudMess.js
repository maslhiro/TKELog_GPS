import React, {
  useState,
  useEffect
} from 'react'
import {
  View,
  Text,
} from 'react-native'
import firebase from 'react-native-firebase'
import AsyncStorage from '@react-native-community/async-storage';

const channel = new firebase.notifications.Android.Channel('TKELog', 'TKELog', firebase.notifications.Android.Importance.Max)
  .setDescription("TKELog's channel");

// Create the channel
firebase.notifications().android.createChannel(channel);

export function CloudMess() {
  const [token, setToken] = useState(false)

  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  getToken = async () => {
    console.log("GET TOKEN")
    try {
      let token = await AsyncStorage.getItem('@FCMToken:key')
      if (token) { 
          setToken(token) 
          console.log("FCM", token)
          return
      }
      let fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log("FCM", fcmToken)
        setToken(fcmToken)
        AsyncStorage.setItem('@FCMToken:key',fcmToken)
      }
    }
    catch (err) {
      console.log("Error Get Token", err)
    }


  }

  requestPermission = async() =>  {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  } 

  useEffect(()=>{
    checkPermission()
  },[])

  return (
    <Text>{token}</Text>
  )
}
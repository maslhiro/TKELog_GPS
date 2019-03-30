import AsyncStorage from '@react-native-community/async-storage';

export const checkToken = async () => {
    try {
        let TKELog_Token = await AsyncStorage.getItem("@TKEToken:key")
        console.log("Toek", JSON.stringify(TKELog_Token ? true : false))
        return TKELog_Token ? true : false
    } catch (error) {
        console.log("Error Get TKELog Token Key : ", error)
        return false
    }

}
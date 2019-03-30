import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import {
    HomeScreen,
    SignInScreen,
    NotiScreen,
    SplashScreen
} from '../screens'

const AppNavigator = createStackNavigator({
    SignIn: {
        screen: SignInScreen
    },
    Noti: {
        screen: NotiScreen
    },
    Splash : {
        screen : SplashScreen
    }
},{
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
        header: null
    }
})

export const RootStack = createAppContainer(AppNavigator);
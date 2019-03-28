import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'
import {
    HomeScreen,
    SignInScreen,

} from '../screens'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    SignIn: {
        screen: SignInScreen
    }
},{
    initialRouteName: 'SignIn',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
        header : null
    }
})

export const RootStack = createAppContainer(AppNavigator);
import React from 'react';
import { createAppContainer } from 'react-navigation';

import Login from '../pages/login/index';
import CreateAccount from '../pages/createAccount/index';
import { onSignIn, isSignedIn } from '../service/auth';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../pages/home';

// const MainNavigator = createDrawerNavigator({
//     Login: {
//         screen: Login,
//         navigationOptions: {
//             drawerIcon: (
//                 <Icon name="user" size={20} />
//             ),
//         },
//     },
//     CreateAccount: {
//         screen: CreateAccount,
//         navigationOptions: {
//             drawerIcon: (
//                 <Icon name="user" size={20} />
//             ),
//         },
//     },
// }, {

//     intialRouteName: 'Login',
//     navigationOptions: {
//         headerStyle: {
//             backgroundColor: 'purple',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             color: 'white',
//             alignSelf: 'center',
//             textAlign: 'center'
//         },
//     },
// });

export const SignedOutRoutes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            drawerIcon: (
                <Icon name="user" size={20} />
            ),
            header: null
        },
    },
    CreateAccount: {
        screen: CreateAccount,
        navigationOptions: {
            drawerIcon: (
                <Icon name="user" size={20} />
            ),
            header: null
        },
    }
});

export const SignedInRoutes = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <>
                    <Icon style={[{ color: tintColor }]} size={25} name={'home'} />
                </>
            ),
        }
    }

}, {
    initialRouteName: 'Home'
});


export const createRootNavigator = (signedIn = false) => {
    return createStackNavigator({
        SignedIn: { screen: SignedInRoutes },
        SignedOut: { screen: SignedOutRoutes }
    },
        {
            headerMode: 'none',

            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut",
            navigationOptions: {
                gesturesEnabled: false,
            },
        });
};

// const AppStack = createStackNavigator(
//     {
//         RootStack: {
//             screen: MainNavigator,
//             navigationOptions: ({ navigation }) => ({
//                 title: 'FitGym',
//                 header: null
//             }),

//         }
//     }, {
//     headerLayoutPreset: 'center'
// });

export default createAppContainer(createRootNavigator(isSignedIn()));
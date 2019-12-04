import React from 'react';
import { createAppContainer } from 'react-navigation';

import Login from '../pages/login/index';
import CreateAccount from '../pages/createAccount/index';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainNavigator = createDrawerNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            drawerIcon: (
                <Icon name="user" size={20} />
            ),
        },
    },
    CreateAccount: {
        screen: CreateAccount,
        navigationOptions: {
            drawerIcon: (
                <Icon name="user" size={20} />
            ),
        },
    },
}, {

    intialRouteName: 'Login',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'purple',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white',
            alignSelf: 'center',
            textAlign: 'center'
        },
    },
});

const AppStack = createStackNavigator(
    {
        RootStack: {
            screen: MainNavigator,
            navigationOptions: ({ navigation }) => ({
                title: 'FitGym',
                header: null
            }),

        }
    }, {
    headerLayoutPreset: 'center'
});

export default createAppContainer(AppStack);
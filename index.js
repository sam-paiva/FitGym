/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import Routes from './src/routes/routes';
import { name as appName } from './app.json';

import store from './src/store/store';

const RootStack = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => RootStack);

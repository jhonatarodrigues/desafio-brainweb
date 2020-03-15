/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import Routes from './src/';
import {name as appName} from './app.json';
import Store from './src/store';
import { Provider } from 'react-redux';

const App = _ => (
    <Provider store={Store}>
        <Routes/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => App);

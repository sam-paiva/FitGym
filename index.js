/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/routes/routes';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Routes);

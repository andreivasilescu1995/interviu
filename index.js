/**
 * @format
 */

import {AppRegistry} from 'react-native';
import login from './components/login';
import voucherDetails from './components/voucherDetails';
import homeScreen from './components/homescreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => homeScreen);

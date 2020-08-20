/**
 * @format
 */
import React, { useState } from 'react'

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import login from './components/Login';
import voucherDetails from './components/VoucherDetails';
import homeScreen from './components/Homescreen';
import voucherList from './components/VoucherList';

AppRegistry.registerComponent(appName, () => homeScreen);

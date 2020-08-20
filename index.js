/**
 * @format
 */
import React, { useState } from 'react'

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import login from './components/Login';
import voucherDetails from './components/VoucherDetails';
import homeScreen from './components/Homescreen';
import homeScreen2 from './components/Homescreen2';
import voucherList from './components/VoucherList';
import voucherDetails2 from './components/LastVoucherDetails';

AppRegistry.registerComponent(appName, () => voucherDetails2);

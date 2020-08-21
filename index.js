/**
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import Login from './components/Login';
import voucherDetails from './components/VoucherDetails';
import homeScreen from './components/Homescreen';
import voucherList from './components/VoucherList';
import voucherDetails2 from './components/LastVoucherDetails';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="VoucherDetails" component={voucherDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Homescreen" component={homeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="VoucherList" component={voucherList} options={{ headerShown: false }} />
                <Stack.Screen name="VoucherDetails2" component={voucherDetails2} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () => App);

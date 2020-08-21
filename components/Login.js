import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Switch,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Logo from './logo';
import { primaryColor, secondaryColor } from './color';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchEnabled: true,
        }
    }

    render() {
        return (
            <>
                <View style={styles.container}>
                    <Logo
                        style={styles.logo}
                    />
                    <Text
                        style={styles.welcome}>Welcome
                </Text>
                    <Text
                        style={styles.message}>
                        Please complete your profile name and your email adress
                </Text>
                </View>

                <View style={styles.containerMain}>
                    <View style={styles.containerInputs}>
                        <TextInput
                            style={styles.inputFirstName}
                            placeholder='      First name'>
                        </TextInput>
                        <TextInput
                            style={styles.inputLastName}
                            placeholder='      Last name'>
                        </TextInput>
                        <TextInput
                            style={styles.inputLastName}
                            placeholder='      Email adress'>
                        </TextInput>
                    </View>
                    <View style={styles.containerSwitch}>
                        <Switch
                            style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                            trackColor={{ false: "#767577", true: secondaryColor }}
                            thumbColor={this.state.switchEnabled ? "#f4f3f4" : "#f4f3f4"}
                            onValueChange={() => this.toggleSwitch()}
                            value={this.state.switchEnabled}
                        />
                        <View style={styles.termsText}>
                            <Text styles={{ color: 'red' }}>Accept the </Text>
                            <Text style={{ color: 'blue', textDecorationLine: 'underline', }}
                                onPress={() => Linking.openURL('http://google.com')}>
                                Terms of Services, Privacy Policy
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('VoucherDetails')}
                        style={styles.regButton}>
                        <Text style={{ alignSelf: 'center', color: '#fff' }}>Continue registration</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 0.6,
    },
    logo: {
        marginTop: '8%',
        marginBottom: '8%',
    },
    welcome: {
        color: primaryColor,
        fontSize: 40,
    },
    message: {
        marginLeft: '22%',
        marginRight: '22%',
        marginBottom: '5%',
        textAlign: 'center',
        fontSize: 14,
        color: '#a1a1a1',
    },
    containerMain: {
        flex: 1,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        backgroundColor: '#e0e0e0',
    },
    containerInputs: {
        height: '50%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '10%',
    },
    inputFirstName: {
        borderColor: primaryColor,
        borderRadius: 15,
        borderWidth: 1.5,
        width: '85%',
    },
    inputLastName: {
        borderColor: primaryColor,
        borderRadius: 15,
        borderWidth: 1.5,
        width: '85%',
    },
    inputEmail: {
        borderColor: primaryColor,
        borderRadius: 15,
        borderWidth: 1.5,
        width: '85%',
    },
    containerSwitch: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        margin: '6%'
    },
    termsText: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: '2%',
    },
    regButton: {
        alignSelf: 'center',
        backgroundColor: primaryColor,
        borderRadius: 12,
        width: '85%',
        height: '12%',
        justifyContent: 'space-around'
    }
})
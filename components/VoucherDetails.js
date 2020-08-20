import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Logo from './logo';
import Category from './touchableComp';
import { secondaryColor, primaryColor } from './Login';

export default function voucherDetails(props) {
    return (
        <>
            <View
                style={styles.containerHeader}>
                <Logo style={styles.logo} />
                <Text
                    style={styles.welcomeText}>
                    Tell us what you like, and we'll select the best vouchers for you.
                </Text>
            </View>

            <Categories style={styles.containerCategories} styleContainer={stylesCategories.container} styleText={stylesCategories.text}/>

            <View style={styles.containerBottom}>
                <TouchableOpacity
                    onPress={() => console.log('TEST')}
                    style={styles.continueButton}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export const Categories = (props) => {
    return (
        <View
            style={props.style}>
            <View style={[styles.row]}>
                <Category styleContainer={props.styleContainer} styleText={props.styleText} text={'Food & Drinks'} />
                <Category styleContainer={props.styleContainer} styleText={props.styleText} text={'Sports'} />
                <Category styleContainer={props.styleContainer} styleText={props.styleText} text={'Leisure'} />
            </View>
            <View style={[styles.row, { width: '85%' }]}>
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Shopping & Lifestryle'} />
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Jobs'} />
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Mobility'} />
            </View>
            <View style={styles.row}>
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Vegan'} />
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Wellness'} />
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Bikes'} />
            </View>
            <View style={styles.row}>
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Study'} />
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Smartphones'} />
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Culture'} />
            </View>
            <View style={styles.row}>
                <Category styleContainer={props.styleContainer} styleText={props.styleText}text={'Banks'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 0.5,
    },
    logo: {
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '15%',
    },
    welcomeText: {
        textAlign: 'center',
        marginLeft: '8%',
        marginRight: '8%',
        fontSize: 15,
        color: '#bababa',
    },
    containerCategories: {
        flex: 1,
        flexDirection: 'column',
        marginTop: '15%',
        marginLeft: '5%',
    },
    row: {
        flexDirection: 'row',
    },
    containerBottom: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    continueButton: {
        flex: 0.325,
        backgroundColor: primaryColor,
        borderColor: primaryColor,
        borderRadius: 15,
        borderWidth: 1.5,
        justifyContent: 'center',
        marginLeft: '9%',
        marginRight: '9%',
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 16,
    }
});

const stylesCategories = StyleSheet.create({
    container: {
        paddingRight: '1.5%',
        paddingLeft: '1.5%',
        paddingBottom: '2%',
    },
    text: {
        textAlign: 'center',
        paddingTop: '1.3%',
        paddingBottom: '1.3%',
        paddingLeft: '6.5%',
        paddingRight: '6.5%',
        color: primaryColor,
        fontSize: 14,
    }
});
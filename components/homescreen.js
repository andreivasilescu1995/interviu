import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Switch,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Logo from './logo';
import { primaryColor } from './login';
import { Categories } from './voucherDetails';

export const Header = (props) => {
    return (
        <View style={props.styleContainer}>
            <Logo />
            <TouchableOpacity
                style={props.styleButton}>
                <Image style={{ marginRight: '3%' }} source={require('../assets/Path3390.png')} />
                <Text style={{ color: '#fff' }}>My city: </Text>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Leuven</Text>
                <Image source={require('../assets/Group152.png')} />
            </TouchableOpacity>
            <Image source={require('../assets/wallet.png')} />
        </View>
    )
};

export default function homeScreen() {
    return (
        <>
            <ScrollView style={{ flex: 1 }}>

                <Header styleContainer={styles.containerHeader} styleButton={styles.locationButton} />

                <View style={styles.containerOffers}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={[styles.images, { aspectRatio: 2, }]} source={require('../assets/MaskGroup15.png')} />
                        <Image style={[styles.images, { aspectRatio: 2.2 }]} source={require('../assets/pizza-PVPBJMQ-1.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '1%', marginRight: '1%' }}>
                        <Image style={[styles.images, { aspectRatio: 1.75 }]} source={require('../assets/desert-PPAC3KE.png')} />
                        <Image style={[styles.images, { aspectRatio: 1.75 }]} source={require('../assets/halloween-party-ballooons-and-decorations-HH9G5UC.png')} />
                    </View>

                </View>

                <View style={{ marginTop: '3%', marginLeft: '3%', marginRight: '3%' }}>
                    <TouchableOpacity style={styles.vouchersButton}>
                        <Text>See all Vouchers</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCategories}>
                    <Text style={styles.navigateText}>Navigate the city</Text>
                    <Categories style={styles.containerCategories} styleContainer={stylesCategories.container} styleText={stylesCategories.text} />
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.accountButton}>
                        <Image style={{marginRight: '5%'}}source={require('../assets/account.png')} />
                        <Text style={{ color: '#fff' }}>My account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    containerHeader: {
        flex: 0.5,
        flexDirection: 'row',
        marginTop: '4%',
        marginLeft: '3%',
        marginRight: '3%',
        justifyContent: 'space-between',
    },
    locationButton: {
        flexDirection: 'row',
        borderColor: primaryColor,
        borderRadius: 15,
        borderWidth: 1.5,
        backgroundColor: primaryColor,
        paddingLeft: '3%',
        paddingRight: '3%',
        alignItems: 'center',
    },
    containerOffers: {
        flex: 3,
        alignContent: 'center',
        marginTop: '2%',
    },
    images: {
        flex: 1,
        resizeMode: 'contain',
        marginTop: '1%',
        marginBottom: '1%',
    },
    vouchersButton: {
        flex: 1,
        flexDirection: 'row',
        borderColor: primaryColor,
        borderRadius: 25,
        borderWidth: 1.5,
        justifyContent: 'center',
        padding: '3%',
    },
    navigateText: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: '5%',
        marginBottom: '2%',
        marginLeft: '3%',
        color: '#302f2c',
    },
    containerCategories: {
        flex: 2.5,
    },
    containerButton: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    accountButton: {
        flexDirection: 'row',
        backgroundColor: primaryColor,
        borderRadius: 30,
        marginBottom: '5%',
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingTop: '2%',
        paddingBottom: '2%',
    }
});

const stylesCategories = StyleSheet.create({
    container: {
        paddingRight: '2%',
        paddingLeft: '2%',
        paddingBottom: '2%',
    },
    text: {
        textAlign: 'center',
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingLeft: '3%',
        paddingRight: '3%',
        color: primaryColor,
        fontSize: 13,
    }
});
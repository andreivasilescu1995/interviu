import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Logo from './logo';
import { ImageOffer } from './img';
import { primaryColor } from './color';
import { Categories } from './VoucherDetails';

export const Header = (props) => {
    return (
        <View style={props.styleContainer}>
            <Logo />
            <TouchableOpacity
                style={props.styleButton}>
                <View style={{flexDirection: 'row', marginLeft: '8%'}}>
                    <Image style={{marginTop: '4%', marginRight: '5%'}}source={require('../assets/Path3390.png')} />
                    <Text style={{ color: '#fff' }}>My city: </Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Leuven</Text>
                </View>
                <Image style={{marginRight: '8%', marginTop: '1%'}}source={require('../assets/Group152.png')} />
            </TouchableOpacity>
            <Image source={require('../assets/wallet.png')} />
        </View>
    );
};

export default function homeScreen() {
    return (
        <>
            <ScrollView style={{ flex: 1 }}>

                <Header styleContainer={styles.containerHeader} styleButton={styles.locationButton} />

                <View style={styles.containerOffers}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={[styles.images, { aspectRatio: 2, }]} source={require('../assets/MaskGroup15.png')} />
                        <View>
                            <ImageOffer
                                imageSource={require('../assets/pizza-PVPBJMQ-1.png')}
                                imageStyle={{aspectRatio: 2.2, borderRadius: 15}}
                                text={'Pizza time in Leuven'}
                                textStyle={[styles.urlTextTitle, { fontSize: 22, fontWeight: 'bold', }]}
                                text1={'1 pizza kopen = 3 meenemen'}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: '3%'}}>
                        <View>
                            <ImageOffer
                                imageStyle={[styles.images], { aspectRatio: 1.6 }}
                                imageSource={require('../assets/desert-PPAC3KE.png')}
                                text={'Sweets week'}
                                textStyle={{ fontSize: 18, fontWeight: 'bold', marginBottom: '1%' }}
                            />
                        </View>
                        <View>
                            <ImageOffer
                                imageStyle={[styles.images], { aspectRatio: 1.6 }}
                                imageSource={require('../assets/halloween-party-ballooons-and-decorations-HH9G5UC.png')}
                                text={'Halloween week'}
                                textStyle={{ fontSize: 18, fontWeight: 'bold', marginBottom: '1%', }}
                            />
                        </View>
                    </View>

                </View>

                <View style={{marginLeft: '3%', marginRight: '3%' }}>
                    <TouchableOpacity style={styles.vouchersButton}>
                        <Text>See all Vouchers</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginBottom: '3%'}}>
                    <Text style={styles.navigateText}>Navigate the city</Text>
                    <Categories styleContainer={stylesCategories.container} styleText={stylesCategories.text} />
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.accountButton}>
                        <Image style={{ marginRight: '5%' }} source={require('../assets/account.png')} />
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
        backgroundColor: primaryColor,
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerOffers: {
        flex: 3,
        alignContent: 'center',
        marginTop: '2%',
    },
    images: {
        flex: 1,
        resizeMode: 'contain',
        marginTop: '3%',
        marginBottom: '3%',
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
        marginTop: '3%',
        marginBottom: '2%',
        marginLeft: '3%',
        color: '#302f2c',
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
        paddingLeft: '6%',
        paddingRight: '6%',
        color: primaryColor,
        fontSize: 14,
    }
});
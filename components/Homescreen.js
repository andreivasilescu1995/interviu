import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';

import Logo from './logo';
import { ImageOffer } from './img';
import { primaryColor } from './color';
import { Categories } from './VoucherDetails';

const d = Dimensions.get('window');

export const Header = (props) => {
    return (
        <View style={props.styleContainer}>
            <Logo />
            <TouchableOpacity
                style={props.styleButton}>
                <View style={{ flexDirection: 'row', marginLeft: '8%' }}>
                    <Image style={{ marginTop: '4%', marginRight: '5%' }} source={require('../assets/Path3390.png')} />
                    <Text style={{ color: '#fff' }}>My city: </Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Leuven</Text>
                </View>
                <Image style={{ marginRight: '8%', marginTop: '1%' }} source={require('../assets/Group152.png')} />
            </TouchableOpacity>
            <Image source={require('../assets/wallet.png')} />
        </View>
    );
};

export default function homeScreen(props) {
    return (
        <>
            <ScrollView>
                <Header styleContainer={styles.containerHeader} styleButton={styles.locationButton} />
                <View style={styles.containerOffers}>
                    <ImageOffer
                        imageSource={require('../assets/MaskGroup15.png')}
                        imageStyle={styles.images}
                    />
                    <View>
                        <ImageOffer
                            imageSource={require('../assets/pizza-PVPBJMQ-1.png')}
                            imageStyle={styles.images}
                            text={'Pizza time in Leuven'}
                            textStyle={stylesImageList.downLeft}
                            text1={'1 pizza kopen = 3 meenemen'}
                            textStyle1={stylesImageList.downLeft1}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <ImageOffer
                                imageStyle={styles.smallImages}
                                imageSource={require('../assets/desert-PPAC3KE.png')}
                                text={'Sweets week'}
                                textStyle={stylesImageList.downLeftSmaller}
                            />
                        </View>
                        <View>
                            <ImageOffer
                                imageStyle={styles.smallImages}
                                imageSource={require('../assets/halloween-party-ballooons-and-decorations-HH9G5UC.png')}
                                text={'Halloween week'}
                                textStyle={stylesImageList.downLeftSmaller}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.vouchersButton}>
                    <Text>See all Vouchers</Text>
                </TouchableOpacity>

                <View style={{ marginBottom: '3%' }}>
                    <Text style={styles.navigateText}>Navigate the city</Text>
                    <Categories styleContainer={stylesCategories.container} styleText={stylesCategories.text} />
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.accountButton} onPress={() => props.navigation.navigate('VoucherList')}>
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
        flex: 1,
        marginTop: '5%',
    },
    images: {
        resizeMode: 'contain',
        width: d.width * 0.95,
        height: d.height * 0.29,
        alignSelf: 'center',
    },
    smallImages: {
        flex: 1,
        resizeMode: 'contain',
        width: d.width * 0.45,
        height: d.height * 0.17,
    },
    vouchersButton: {
        flex: 1,
        flexDirection: 'row',
        borderColor: primaryColor,
        borderRadius: 25,
        borderWidth: 1.5,
        justifyContent: 'center',
        padding: '2%',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%'
    },
    navigateText: {
        fontWeight: 'bold',
        fontSize: 18,
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
        paddingLeft: '3%',
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

const stylesImageList = StyleSheet.create({
    downLeft: {
        marginLeft: '1%',
        marginBottom: '2%',
        fontSize: 21,
        fontWeight: 'bold',
    },
    downLeft1: {
        marginLeft: '1%',
        marginBottom: '3%',
    },
    upRight: {
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: '4%',
        marginRight: '2%',
    },
    downLeftSmaller: {
        marginLeft: '8%',
        marginBottom: '2%',
        fontSize: 17,
        fontWeight: 'bold',
    },
});


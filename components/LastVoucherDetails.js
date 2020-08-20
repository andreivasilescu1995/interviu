import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    FlatList,
} from 'react-native';
import { Dimensions } from 'react-native';

import { primaryColor, secondaryColor } from './color';

const d = Dimensions.get('window');

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require('../assets/back(1)(1).png')} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.locationButton}>
                <View style={{ flex: 1, flexDirection: 'row', marginLeft: '5%' }}>
                    <Image style={{ alignSelf: 'center', marginRight: '3%' }} source={require('../assets/Path3390.png')} />
                    <Text style={{ color: '#fff' }}>My city: </Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Leuven</Text>
                </View>
                <Image style={{ marginRight: '5%' }} source={require('../assets/Group152.png')} />
            </TouchableOpacity >
        </View >
    );
};

const Label = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '20%' }}>
            <View style={styles.labelExpireSoon}>
                <Text style={styles.expireText}>Will expire soon</Text>
            </View>
        </View >
    )
};

export default function voucherDetails2() {
    return (
        <>
            <ImageBackground
                style={styles.imageBackground}
                source={require('../assets/Image6.png')}>
                <Header />

                <Label />

                <View style={styles.containerMain}>
                    <View>
                        <Image style={styles.dominoLogo} source={require('../assets/dominos_social_logo.png')} />
                    </View>

                    <TouchableOpacity
                        style={styles.share}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: '3%' }}>
                            <Image style={{ backgroundColor: secondaryColor, borderRadius: 100, padding: '1.5%', width: '1.5%', height: '1.5%', marginRight: '1%' }} />
                            <Image style={{ backgroundColor: secondaryColor, borderRadius: 100, padding: '1%', width: '1%', height: '1%', marginRight: '2%' }} />
                            <Text>Share with friends</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.voucherTitle}>Title of the voucher</Text>
                    <Text style={styles.loremIpsum}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

                    <TouchableOpacity
                        style={styles.voucherButton}>
                        <Text style={{color: '#fff', textAlign: 'center', fontSize: 15}}>Use voucher</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'center',
        width: d.width,
        height: d.height / 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    locationButton: {
        flexDirection: 'row',
        borderColor: primaryColor,
        borderRadius: 15,
        backgroundColor: primaryColor,
        width: '80%',
        alignItems: 'center'
    },
    labelExpireSoon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        backgroundColor: secondaryColor,
        borderRadius: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
    },
    expireText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '3%',
        paddingBottom: '3%'
    },
    containerMain: {
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff',
        marginTop: '15%',
    },
    dominoLogo: {
        alignSelf: 'center',
        top: '-38%',
    },
    share: {
        borderColor: primaryColor,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        top: '-10%',
    },
    voucherTitle: {
        color: primaryColor,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: '-5%',
    },
    loremIpsum: {
        textAlign: 'center',
        fontSize: 15,
        marginLeft: '5%',
        marginRight: '5%',
    },
    voucherButton: {
        backgroundColor: primaryColor,
        borderRadius: 15,
        borderWidth: 1,
        width: '85%',
        height: '10%',
        marginTop: '10%',
        alignSelf: 'center',
        justifyContent: 'center'
    }
});
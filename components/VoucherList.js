import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
} from 'react-native';
import { Dimensions } from 'react-native';

import { Header } from './Homescreen';
import { primaryColor } from './Login';
import { ImageOffer } from './img';

const d = Dimensions.get('window')

function ImageListItem({ item }) {
    return (
        <ImageOffer
            imageSource={item.imageSource}
            imageStyle={styles.images}
            text={item.text}
            textStyle={stylesList.downLeft}
            text1={item.text1}
            textStyle1={stylesList.downLeft1}
            text2={item.text2}
            textStyle2={stylesList.upRight}
        />
    );
};

const images = [
    { id: '1', text: 'Mega Week', text1: '1 pizza kopen = 3 meenemen', text2: 'Pizza Hut', imageSource: require('../assets/pizza-PVPBJMQ.png') },
    { id: '2', text: 'Coffe brake', text1: '1 cofee to go for you', text2: 'Company name', imageSource: require('../assets/Image1.png') },
    { id: '3', text: 'Srimps and seafood', text1: '15% discount', text2: 'Company name', imageSource: require('../assets/Image3.png') },
    { id: '4', text: 'T-Bone stake', text1: 'a free drink', text2: 'Pizza Hut', imageSource: require('../assets/Image4.png') },
    { id: '5', imageSource: require('../assets/Image5.png') },
];

export default function voucherList() {
    return (
        <>
            <Header styleContainer={styles.containerHeader} styleButton={styles.locationButton} />
            <FlatList
                data={images}
                renderItem={({ item }) => <ImageListItem item={item} />}
                keyExtractor={item => item.id}
            />
        </>
    );
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
    images: {
        flex: 1,
        resizeMode: 'stretch',
        width: d.width * 0.95,
        height: d.height * 0.29,
        borderRadius: 8,
        alignSelf: 'center',
        margin: '2%'
    },
});

const stylesList = StyleSheet.create({
    downLeft: {
        marginLeft: '4%',
        marginBottom: '1%',
        fontSize: 21,
        fontWeight: 'bold',
    },
    downLeft1: {
        marginLeft: '4%',
        marginBottom: '2%',
    },
    upRight: {
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: '4%',
        marginRight: '2%',
    },
});
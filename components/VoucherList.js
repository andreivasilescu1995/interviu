import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
} from 'react-native';

import { Header } from './Homescreen';
import { primaryColor } from './Login';
import { ImageOffer } from './img';

function Item({ item }) {
    return (
        <ImageOffer imageSource={item.imageSource} imageStyle={styles.images} />
    );
};

const images = [
    { id: '1', imageSource: require('../assets/pizza-PVPBJMQ.png') },
    { id: '2', imageSource: require('../assets/Image1.png') },
    { id: '3', imageSource: require('../assets/Image3.png') },
    { id: '4', imageSource: require('../assets/Image4.png') },
    { id: '5', imageSource: require('../assets/Image5.png') },
];

export default function voucherList() {
    return (
        <>
            <Header styleContainer={styles.containerHeader} styleButton={styles.locationButton} />
            <FlatList
                style={{ flex: 1 }}
                data={images}
                renderItem={({ item }) => <Item item={item} />}
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
        alignSelf: 'center',
        margin: '2%'
    },
});
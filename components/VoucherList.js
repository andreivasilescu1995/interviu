import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';

import { Dimensions } from 'react-native';

import { primaryColor } from './color';
import Category from './category';
import { Header } from './Homescreen';
import { ImageOffer } from './img';
import { TouchableOpacity } from 'react-native-gesture-handler';

const d = Dimensions.get('window')

function ImageListItem({ item }) {
    return (
        <ImageOffer
            imageSource={item.imageSource}
            imageStyle={styles.images}
            text={item.text}
            textStyle={stylesImageList.downLeft}
            text1={item.text1}
            textStyle1={stylesImageList.downLeft1}
            text2={item.text2}
            textStyle2={stylesImageList.upRight}
        />
    );
};

function CategoryListItem({ item }) {
    return (
        <Category
            styleContainer={stylesCategoryList.container}
            iconSource={item.iconSource}
            text={item.text}
            styleIcon={stylesCategoryList.icon}
            styleText={stylesCategoryList.text}
        />
    );
}

const imagesList = [
    { id: '1', text: 'Mega Week', text1: '1 pizza kopen = 3 meenemen', text2: 'Pizza Hut', imageSource: require('../assets/pizza-PVPBJMQ.png') },
    { id: '2', text: 'Coffe brake', text1: '1 cofee to go for you', text2: 'Company name', imageSource: require('../assets/Image1.png') },
    { id: '3', text: 'Srimps and seafood', text1: '15% discount', text2: 'Company name', imageSource: require('../assets/Image3.png') },
    { id: '4', text: 'T-Bone stake', text1: 'a free drink', text2: 'Pizza Hut', imageSource: require('../assets/Image4.png') },
    { id: '5', text2: 'Pizza Hut', imageSource: require('../assets/Image5.png') },
];

const categoryList = [
    { id: '1', text: 'Food & Drinks', iconSource: require('../assets/Page-1.png') },
    { id: '2', text: 'Sports', iconSource: require('../assets/basketball.png') },
    { id: '3', text: 'Leisure', iconSource: require('../assets/bowling.png') },
    { id: '4', text: 'Internet of things', iconSource: require('../assets/internet-of-things.png') },
];

export default function voucherList(props) {
    return (
        <>
            <Header styleContainer={styles.containerHeader} styleButton={styles.locationButton} />
            <View style={{ marginLeft: '3%', marginTop: '6%', marginBottom: '4%' }}>
                <FlatList
                    data={categoryList}
                    horizontal={true}
                    renderItem={({ item }) => <CategoryListItem item={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <FlatList
                data={imagesList}
                renderItem={({ item }) => <ImageListItem item={item} />}
                keyExtractor={item => item.id}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ padding: '3%', backgroundColor: primaryColor, borderRadius: 30, }} onPress={() => props.navigation.navigate('VoucherDetails2')}>
                    <Text style={{ color: '#fff' }}>NEXT SCREEN</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
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
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '2%',
    },
});

const stylesImageList = StyleSheet.create({
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

const stylesCategoryList = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: primaryColor,
        paddingLeft: d.width * 0.03,
        paddingRight: d.width * 0.03,
        paddingTop: d.height * 0.003,
        paddingBottom: d.height * 0.003,
    },
    icon: {
        marginLeft: 5,
    },
    text: {
        color: primaryColor,
        fontSize: 14,
        paddingLeft: 10
    }
});
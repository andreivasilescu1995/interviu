import React from 'react';
import {
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export const ImageOffer = (props) => {
    return (
        <>
            <Image style={props.imageStyle} source={props.imageSource} />
            <Text style={[props.textStyle, styles.downLeft]}>{props.text}</Text>
            <Text style={[props.textStyle1, styles.downLeft1]}>{props.text1}</Text>
            <Text style={[props.textStyle2, styles.upRight]}>{props.text2}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    downLeft: {
        position: 'absolute',
        bottom: '14%',
        left: '4%',
        color: '#fff',
    },
    downLeft1: {
        position: 'absolute',
        bottom: '6%',
        left: '4%',
        color: '#fff',
    },
    upRight: {
        position: 'absolute',
        right: '5%',
        top: '5%',
        color: 'red'
    }
});

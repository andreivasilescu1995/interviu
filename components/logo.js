import React from 'react';
import { Image } from 'react-native';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image
                style={this.props.style}
                source={require('../assets/Group148.png')}
            />
        )
    }
};
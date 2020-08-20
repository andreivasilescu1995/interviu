import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { primaryColor, secondaryColor } from './color';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contColor: '#fff',
            textColor: primaryColor,
            borderColor: primaryColor,
            pressed: false
        }
    }

    changeColor() {
        this.state.pressed ?
            this.setState({
                pressed: false,
                borderColor: primaryColor,
                contColor: '#fff',
                textColor: primaryColor
            })
            :
            this.setState({
                pressed: true,
                borderColor: secondaryColor,
                contColor: secondaryColor,
                textColor: '#fff'
            })
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', paddingRight: 8 }}>
                <TouchableOpacity
                    onPress={() => { this.changeColor() }}
                    style={[this.props.styleContainer, {backgroundColor: this.state.contColor, borderColor: this.state.borderColor}]}>
                    <Image
                        source={this.props.iconSource}
                        style={this.props.styleIcon}
                    />
                    <Text style={this.props.styleText}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
};
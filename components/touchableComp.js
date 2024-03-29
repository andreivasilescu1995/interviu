import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { primaryColor, secondaryColor } from './color';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            backgroundColor: '#fff',
            textColor: primaryColor,
            borderColor: primaryColor,
        }
    }

    changeColor() {
        this.state.pressed ?
            this.setState({
                pressed: false,
                borderColor: primaryColor,
                backgroundColor: '#fff',
                textColor: primaryColor
            })
            :
            this.setState({
                pressed: true,
                borderColor: secondaryColor,
                backgroundColor: secondaryColor,
                textColor: '#fff'
            })
    }

    render() {
        return (
            <View style={this.props.styleContainer}>
                <TouchableOpacity
                    onPress={() => this.changeColor()}
                    style={{
                        borderColor: this.state.borderColor,
                        borderRadius: 15,
                        borderWidth: 1.5,
                        backgroundColor: this.state.backgroundColor,
                    }}>
                    <Text style={[this.props.styleText, { color: this.state.textColor }]}>{this.props.text}</Text>
                </TouchableOpacity >
            </View>
        )
    }

    // styles = StyleSheet.create({
    //     container: {
    //         paddingRight: '1.5%',
    //         paddingLeft: '1.5%',
    //         paddingBottom: '2%',
    //     },
    //     text: {
    //         textAlign: 'center',
    //         paddingTop: '1.3%',
    //         paddingBottom: '1.3%',
    //         paddingLeft: '6%',
    //         paddingRight: '6%',
    //         color: primaryColor,
    //         fontSize: 14,
    //     }
    // })
};


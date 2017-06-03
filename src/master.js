import React, { Component } from "react";
import StockListItem from "./StockListItem";
import { View, Text, FlatList, Button, Alert } from "react-native";
import contentStyle from "./contentStyle"
styles = require('./contentStyle');

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

export default class master extends Component {

    constructor(props) {
        super(props)
        this.data = [{
            code: 5,
            stock: 100

        }, {
            code: 6,
            stock: 3000
        },
            {
                code: 7,
                stock: 4000
            }
        ]
    }

    render() {
        return (
            <View>
              <FlatList data={ this.data } renderItem={ ({item}) => <StockListItem stock={ item } /> } />
              <View style={ contentStyle.button }>
                <Button onPress={ onButtonPress } style={ contentStyle.text } title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button" />
              </View>
            </View>
            );
    }


}
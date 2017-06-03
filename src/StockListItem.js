import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import contentStyle from "./contentStyle"
import ReactNativeTdd from "./master"
styles = require('./contentStyle');
export default class StockListItem extends Component {

  render() {
    return (

      <View style={ contentStyle.container }>
        <View style={ contentStyle.box }>
          <Text style={ contentStyle.text }>
            StockDataPlaceholder
          </Text>
        </View>
      </View>


      );

  }

}
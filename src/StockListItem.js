import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {Container, Button, Text, Header, Content, Card, CardItem, Body} from 'native-base';
import contentStyle from "./contentStyle"
import ReactNativeTdd from "./master"
styles = require('./contentStyle');

///all data goes here
export default class StockListItem extends Component {

  render() {
    return (

      <Container>
        <Content>
          <Text style={ contentStyle.text }>
            StockDataPlaceholder
          </Text>
      </Content>
      </Container>


      );

  }

}
import { View, Text, FlatList, StyleSheet } from "react-native";
const React = require('react-native');
const {Stylesheet} = React;

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    flex: 1,
  },
  padding: {height: 12,},
  
  box: {
    //width: 150,
    backgroundColor: 'powderblue',
    height: 100,
    borderRadius: 1,
    alignSelf: 'stretch',

    borderWidth: 1,
    borderColor: 'white',
    margin: 3,
  },
  button: {
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
  },
  stockItem: {
    alignSelf: 'stretch',
  },
});
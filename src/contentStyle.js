import { View, Text, FlatList, StyleSheet } from "react-native";
const React = require('react-native');
const {Stylesheet} = React;

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    flex: 1,
  },
  box: {
    //width: 150,
    backgroundColor: 'powderblue',
    height: 100,
    borderRadius: 4,
    alignSelf: 'stretch',

    borderWidth: .3,
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 4,
    alignSelf: 'stretch',
    borderWidth: .3,
    borderColor: 'black',
  },
  text: {
    textAlign: 'center',
  },
});
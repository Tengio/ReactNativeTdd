import React, {Component} from "react";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thinkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import StockListItem from "./StockListItem";
import {View, FlatList, Alert} from "react-native";
import {
    Container,
    Button,
    Text,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    List,
    ListItem
} from 'native-base';
import contentStyle from "./contentStyle";
import getTheme from './native-base-theme/components';

const counter = (state = 0, action) => {
    switch (action.type)
    {
        case 'INCREASE':
        return state + 1;
        case 'DECREASE':
        return state - 1;
        default: 
        return state;
    }
}
const store = createStore(counter);




styles = require('./contentStyle');

const onButtonPress = () => {
    store.dispatch({type: 'INCREASE'});
    console.log(store.getState());
};

const Decrease = () => {
    store.dispatch({type: 'DECREASE'});
   
};

var userButtons = [
    {
        key: 0,
        Stock: 'GoldSmiths',
        Currency: 'USA',
        CurrentAmount: 100,
        change: + 10
    }
];

var addNewItem = function () {
    //add new stock slot

}


var currentCounteramount = 0;

export default class master extends Component {

    render() {
        return (
            <Provider>
            <Container>
                <Header>
                    <Text>
                        Stock Tracker TM
                    </Text>
                </Header>

                <Content>
                    <View style={contentStyle.button}>
                        <View style={contentStyle.stockItem}>
                            <List>
                                <ListItem itemDivider>
                                <Text>Amount: {store.getState()}</Text>
                                </ListItem>
                            </List>
                        </View>
                        <Button primary onPress={onButtonPress}>
                            <Text>Increase Counter</Text>
                        </Button>
                        <Button primary onPress={Decrease}>
                            <Text>Decrease Counter</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
            </Provider>
 
        );
    }

}
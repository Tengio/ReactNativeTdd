import React, {Component} from "react";
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
styles = require('./contentStyle');

const onButtonPress = () => {
    addNewItem();
};

var userButtons = [
    {
        id: 1,
        Stock: 'GoldSmiths',
        Currency: 'USA',
        CurrentAmount: 100,
        change: + 10
    }
];

var addNewItem = function () {
    //add new stock slot
    Alert.alert("" + userButtons[1]);

}

export default class master extends Component {

    constructor(props) {
        super(props)
        this.data = [
            {
                code: 5,
                stock: 100
            }
        ]
    }

    render() {
        return (
            
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
                                    <Text>{userButtons[0].stock}</Text>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Text>Stock Item 2</Text>
                                </ListItem>
                            </List>
                        </View>
                        <Button primary onPress={onButtonPress}>
                            <Text>Add Tracker</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
 
        );
    }

}
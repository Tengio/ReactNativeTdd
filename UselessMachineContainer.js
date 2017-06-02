import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CustomButton from './CustomButton';

export default class UselessMachineContainer extends React.Component {
    render() {
        return <View>
                <Text>Useless machine</Text>
                <CustomButton />
                <CustomButton />
                </View>
    }
}

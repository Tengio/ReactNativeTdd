import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import UselessMachineContainer from '../UselessMachineContainer';

describe('UselessMachineContainer', () => {
    it('should render two button and a text', () => {
        const tree = renderer.create(
            <UselessMachineContainer/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
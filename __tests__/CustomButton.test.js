import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from '../CustomButton';

describe('CustomButton', () => {
    
    it('should render with undefined text', () => {
        const tree = renderer.create(
            <CustomButton />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('should render text', () => {
        const tree = renderer.create(
            <CustomButton text="Submit"/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
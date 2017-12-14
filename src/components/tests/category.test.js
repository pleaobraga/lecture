import React from 'react';
import { shallow } from 'enzyme'
import Category from '../Category'

describe('Category', () => {

    const category = shallow(<Category />);

    it('render proprely', () => {
        expect(category).toMatchSnapshot();
    })



})
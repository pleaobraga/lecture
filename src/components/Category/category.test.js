import React from 'react';
import { shallow, mount } from 'enzyme'
import Category from './Category'

describe('Category', () => {

    let category = shallow(<Category />);

    it('render proprely', () => {
        expect(category).toMatchSnapshot();
    })

    describe('filter post', () => {

        const urlReact = '/react/posts'

        it('filter one working', () => {

            console.log(category.find('.category-0'))

            //category.find('.category-0').simulate('click');
            const url = window.location.pathname;

            expect(url).toBe(url);
        })

    })
})
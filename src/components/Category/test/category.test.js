import React from 'react';
import { shallow, mount } from 'enzyme'
import Category from '../Category'
import { config } from '../../../Utils/apiUtils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('Category', () => {

    let category = shallow(<Category />);

    it('render proprely', () => {
        expect(category).toMatchSnapshot();
    })

    /*describe('filter post', () => {

        const urlReact = '/categories'

        const mock = new MockAdapter(axios);

        mock
        .onGet( '/categories')
        .reply(200, ['react', 'redux', 'other'] ,config)

        beforeEach(() => {
            let category = mount(<Category />);
        })

    
        it('filter one working', () => {

            console.log(category.find('.category-0'))

            //category.find('.category-0').simulate('click');
            category.find('.btn-add').simulate('click');   

            const url = window.location.pathname;

            expect(url).toBe(url);
        })

    })*/
})
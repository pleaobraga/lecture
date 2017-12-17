import React from 'react'
import { mount, shallow } from 'enzyme'
import Post from './Post'

describe('Post', () => {
    
    let post = shallow(<Post />) 

    it('render proprely', () => {
        expect(post).toMatchSnapshot();
    })
})
import React from 'react'
import { shallow } from 'enzyme'
import { CreatePost } from "../CreatePost"

describe('CreatePost', () => {

    let createPost = shallow(<CreatePost/>)

    it('render proprely', () => {
        expect(createPost).toMatchSnapshot()
    })

    it('has Post Form Oponent', () => {
        expect(createPost.find('PostForm').exists()).toBe(true)
    })

})
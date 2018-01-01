import React from 'react'
import { shallow, mount } from 'enzyme'
import PostForm from '../PostForm'

describe('PostForm', () => {

    let postForm = shallow(<PostForm/>)

    it('render Proprely', () => {
        expect(postForm).toMatchSnapshot()
    })

    /*describe('when mount', () => {

        postForm = mount(<PostForm/>)

        it('has title label', () => {
            expect(postForm.find('label.title').text()).toEqual('Title')
        })

        it('has title input', () => {
            expect(postForm.find('input.title').exits()).toBe(true)
        })

        it('has body label', () => {
            expect(postForm.find('label.body').text()).toEqual('Title')
        })

        it('has body input', () => {
            expect(postForm.find('input.body').exits()).toBe(true)
        })

        it('has author label', () => {
            expect(postForm.find('label.author').text()).toEqual('Title')
        })

        it('has author input', () => {
            expect(postForm.find('input.author').exits()).toBe(true)
        })

        it('has category label', () => {
            expect(postForm.find('label.category').text()).toEqual('Title')
        })

        it('has category input', () => {
            expect(postForm.find('select.category').exits()).toBe(true)
        })

    })*/

    
})
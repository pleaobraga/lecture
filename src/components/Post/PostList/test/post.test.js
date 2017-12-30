import React from 'react'
import { mount, shallow } from 'enzyme'
import  { PostList }  from '../PostList'

describe('Post', () => {
    
    let post = shallow(<PostList />) 
    let props = {};

    it('render proprely', () => {
        expect(post).toMatchSnapshot();
    })

    describe('when mounted', () => {

        props.posts = [{
            "id": "8xf0y6ziyjabvozdd253nd",
            "timestamp": 1467166872634,
            "title": "Udacity is the best place to learn React",
            "body": "Everyone says so after all.",
            "author": "thingtwo",
            "category": "react",
            "voteScore": 6,
            "deleted": false,
            "commentCount": 2
            }]
            
        props.history = ['/']

        post = mount(<PostList {...props} />)

        describe('check proprieties', () => {

            it('show Post title', () => {
                expect(post.find('.title').exists()).toBe(true);
            })

            it('show Author name', () => {
                expect(post.find('.author').exists()).toBe(true);
            })

            it('show creation post date', () => {
                expect(post.find('.date').exists()).toBe(true);
            })

            it('show post category', () => {
                expect(post.find('.category').exists()).toBe(true);
            })

            it('show post score', () => {
                expect(post.find('.score').exists()).toBe(true);
            })

            it('show comments number', () => {
                expect(post.find('.comments').exists()).toBe(true)
            })
        })

        // describe('show post details', () => {
        //     post.find('.post-item').simulate('click');

        //     const url = window.location.pathname;
        //     const expectedURL = '/posts/8xf0y6ziyjabvozdd253nd'
            
        //     expect(url).toBe(expectedURL);
        // })
    })
})
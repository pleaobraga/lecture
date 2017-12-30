import React from 'react'
import { shallow, mount } from 'enzyme'
import PostDetail from '../PostDetail'


describe('PostDetail', () => {

    let postDetail = shallow(<PostDetail />)
    let props = {}


    it('render proprely', () => {
        expect(postDetail).toMatchSnapshot()
    })

    describe('when mounted', () => {

        props.post = {
            "id": "8xf0y6ziyjabvozdd253nd",
            "timestamp": 1467166872634,
            "title": "Udacity is the best place to learn React",
            "body": "Everyone says so after all.",
            "author": "thingtwo",
            "category": "react",
            "voteScore": 6,
            "deleted": false,
            "commentCount": 2
            }
            
        props.history = [`/posts/${props.post.id}`]

        postDetail = mount(<PostDetail {...props} />)

        describe('check proprieties', () => {

            it('show Post title', () => {
                expect(postDetail.find('.title').exists()).toBe(true);
            })

            it('show Author name', () => {
                expect(postDetail.find('.author').exists()).toBe(true);
            })

            it('show creation postDetail date', () => {
                expect(postDetail.find('.date').exists()).toBe(true);
            })

            it('show postDetail category', () => {
                expect(postDetail.find('.category').exists()).toBe(true);
            })

            it('show postDetail score', () => {
                expect(postDetail.find('.score').exists()).toBe(true);
            })

            it('show body content', () => {
                expect(postDetail.find('.body').exists()).toBe(true)
            })
        })
    })
})
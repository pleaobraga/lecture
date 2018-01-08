import React from 'react'
import { mount, shallow } from 'enzyme'
import CommentsList from '../CommentsList'

describe('CommentsList', () => {

    let commentsList = shallow(<CommentsList/>)
    let props = []

    it('render Proprely', () => {
        expect(commentsList).toMatchSnapshot();
    })

    describe('when in mount', () => {

        props.comments = [{
            "id": "894tuq4ut84ut8v4t8wun89g",
            "parentId": "8xf0y6ziyjabvozdd253nd",
            "timestamp": 1468166872634,
            "body": "Hi there! I am a COMMENT.",
            "author": "thingtwo",
            "voteScore": 6,
            "deleted": false,
            "parentDeleted": false
        }]

        commentsList = mount(<CommentsList {...props} />)

        it('has body', () => {
            expect(commentsList.find('.body').exists()).toBe(true)
        })
        
        it('has author', () => {
            expect(commentsList.find('.author').exists()).toBe(true)
        })
        
        it('has date', () => {
            expect(commentsList.find('.date').exists()).toBe(true)
        })

        it('has voteScotre', () => {
            expect(commentsList.find('.score').exists()).toBe(true)
        })
        
    })
})
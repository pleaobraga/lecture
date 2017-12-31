import React from 'react'
import { shallow } from 'enzyme'
import { PostView } from '../PostView'

describe('PostView', () => {
    
    let postView = shallow(<PostView />)


    it('render Proprely', () => {
        expect(postView).toMatchSnapshot()
    })

    it('contains a connected Post Detail component', () => {
        expect(postView.find('PostDetail').exists()).toBe(true)
    })

    it('contains a commentsList component', () => {
        expect(postView.find('CommentsList').exists()).toBe(true)
    })
})
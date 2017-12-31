import React from 'react'
import { mount, shallow } from 'enzyme'
import CommentsList from '../CommentsList'

describe('CommentsList', () => {

    let commentsList = shallow(<CommentsList/>)

    it('render Proprely', () => {
        expect(commentsList).toMatchSnapshot();
    })
})
import React from 'react'
import { mount, shallow } from 'enzyme'
import { CategoryFiltered } from '../CategoryFiltered'

describe('CategoryFiltered', () => {
    
    let categoryFiltered = shallow(<CategoryFiltered />);
    let props = {};
    
    it('render propriely', () => {
        expect(categoryFiltered).toMatchSnapshot();
    })

    it('contains a connected Category Component', () => {
        expect(categoryFiltered.find('Connect(Category)').exists()).toBe(true);
    })

    it('contains a Post Component', () => {
        expect(categoryFiltered.find('withRouter(PostList)').exists()).toBe(true);
    })

    /*describe('when mounted', () => {

        const mockGetAllPosts = jest.fn();

        props.getAllPosts = mockGetAllPosts;

        home = mount(<Home />)

        it('dispatche the getAllPost() method when it recieves the props', () => {
            expect(mockGetAllPosts).toHaveBeenCalled();
        })
    })*/
})
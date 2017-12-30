import React from 'react'
import { mount, shallow } from 'enzyme'
import { Home } from '../Home'

describe('Home', () => {
    
    let home = shallow(<Home />);
    let props = {};
    
    it('render propriely', () => {
        expect(home).toMatchSnapshot();
    })

    it('contains a connected Category Component', () => {
        expect(home.find('Connect(Category)').exists()).toBe(true);
    })

    it('contains a PostList Component', () => {
        expect(home.find('withRouter(PostList)').exists()).toBe(true);
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
import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
    
    const app = shallow(<App />);
    
    it('render propriely', () => {
        expect(app).toMatchSnapshot();
    })

    it('contains a Category Component', () => {
        expect(app.find('Category').exists()).toBe(true);

    })
})
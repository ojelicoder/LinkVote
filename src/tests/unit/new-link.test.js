import React from 'react';
import reactDom from 'react-dom';
import NewLink from '../../pages/NewLink';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const wrapper = shallow(<NewLink />);

describe('New Link', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        reactDom.render(<BrowserRouter><NewLink /></BrowserRouter>, div);
    })

    it('renders DOM elements correctly', () => {
        const components = wrapper.find('div.new-link');
        expect(components.length).toBe(1);
    })
})
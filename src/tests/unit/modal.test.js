import React from 'react';
import reactDom from 'react-dom';
import Modal from '../../components/Modal';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const modalProp = {
    title : 'Test Title',
    content: 'Test content text',
    text: 'Test',
    toggle: true,
    confirm: true
},

wrapper = shallow(<Modal props={modalProp} />);

describe('Modal', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        reactDom.render(<Modal props={modalProp} />, div);
    })

    it('renders DOM elements correctly', () => {
        const components = wrapper.find('div.modal_container');
        expect(components.length).toBe(1);
    })
    
    it('matches snapshot', () => {
        const tree = renderer.create(<Modal modalProp={{title: 'Matches title'}} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})
import React from 'react';
import reactDom from 'react-dom';
import Toast from '../../components/Toast';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const toastProp = {
    message : 'Success process',
    type: 'success',
    name: 'Test link name',
    toastClosed: true
},

wrapper = shallow(<Toast props={toastProp} />);

describe('Toast', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        reactDom.render(<Toast props={toastProp} />, div);
    })

    it('renders DOM elements correctly', () => {
        const components = wrapper.find('div.toast');
        expect(components.length).toBe(1);
    })

    it('matches snapshot', () => {
        const tree = renderer.create(<Toast toastProp={{type: 'Success matches snapshot'}} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('renders error toast correctly', () => {
        renderer.create(<Toast toastProp={{type: 'error'}} />).toJSON();
        const components = wrapper.find('div.toast-error');
        expect(components.length).toBe(1);
    })
})
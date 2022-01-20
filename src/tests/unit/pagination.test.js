import React from 'react';
import reactDom from 'react-dom';
import Pagination from '../../components/Pagination';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const paginationProp = {
    totalPage : 3,
    page: 2,
    setPage: 2
},

wrapper = shallow(<Pagination props={paginationProp} />);

describe('Pagination', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        reactDom.render(<Pagination props={paginationProp} />, div);
    })

    it('renders navigate correctly', () => {
        const components = wrapper.find('div.pagination_prev');
        expect(components.length).toBe(1);
    })

    it('matches snapshot', () => {
        const tree = renderer.create(<Pagination paginationProp={{totalPage: 5}} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
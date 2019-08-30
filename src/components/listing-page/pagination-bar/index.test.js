import React from 'react';
import { shallow } from 'enzyme';

import PaginationBar from './index';

describe('PaginationBar Component', () => {
    let props = {};
    beforeEach(() => {
        props = {
            page: 1,
            limit: 20,
            shipmentsLength: 10,
            changePage: jest.fn(() => {
                props.page += 1;
                return null;
            })
        };
    });

    it('shallow renders without crashing', () => {
        const wrapper = shallow(<PaginationBar {...props} />);
        expect(wrapper).toBeDefined();
    });

    it('renders page number', () => {
        const wrapper = shallow(<PaginationBar {...props} />);
        expect(wrapper.find('.page-number').exists()).toBeTruthy();
    });

    it('renders page number as per passed prop', () => {
        const wrapper = shallow(<PaginationBar {...props} />);
        expect(wrapper.find('.page-number').text()).toEqual('1');
    });

    it('renders pagination arrows', () => {
        props.shipmentsLength = 20;
        const wrapper = shallow(<PaginationBar {...props} />);
        expect(wrapper.find('.next').exists()).toBeTruthy();
    });

    it('update page number on click next', () => {
        props.shipmentsLength = 20;
        const wrapper = shallow(<PaginationBar {...props} />);
        wrapper.find('.next').simulate('click');
        const updatedWrapper = shallow(<PaginationBar {...props} />);
        expect(updatedWrapper.find('.page-number').text()).toEqual('2');
    });
});

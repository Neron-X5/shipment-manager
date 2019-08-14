import React from 'react';
import { shallow } from 'enzyme';

import PaginationBar from './index';

describe('PaginationBar Component', () => {
    const props = {
        page: 1,
        limit: 20,
        shipmentsLength: 10,
        changePage: () => {
            props.page += 1;
        }
    };

    it('shallow renders without crashing', () => {
        shallow(<PaginationBar {...props} />);
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

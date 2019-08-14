import React from 'react';
import { shallow } from 'enzyme';

import ActionBar from './index';

describe('ActionBar Component', () => {
    const props = {
        filterStatus: false,
        searchStatus: false,
        sortBy: '',
        orderBy: '',
        searchQuery: '',
        toggleFilters: () => {
            props.filterStatus = true;
            props.searchStatus = false;
            return false;
        },
        setSortBy: () => {
            return false;
        },
        setOrderBy: (order = 'desc') => {
            props.orderBy = order;
            return false;
        },
        toggleSearch: () => {
            props.searchStatus = true;
            props.filterStatus = false;
            return false;
        },
        handleSearch: () => {
            return false;
        },
        clearSearch: () => {
            props.searchStatus = false;
            return false;
        }
    };

    it('shallow renders without crashing', () => {
        shallow(<ActionBar {...props} />);
    });

    it('renders buttons', () => {
        const wrapper = shallow(<ActionBar {...props} />);
        expect(wrapper.find('.filter').exists()).toBeTruthy();
        expect(wrapper.find('.search').exists()).toBeTruthy();
    });

    it('renders filter-box', () => {
        const wrapper = shallow(<ActionBar {...props} />);
        wrapper.find('.filter').simulate('click');
        const newWrapper = shallow(<ActionBar {...props} />);
        expect(newWrapper.find('.filter-box').exists()).toBeTruthy();
    });

    it('renders search input', () => {
        const wrapper = shallow(<ActionBar {...props} />);
        wrapper.find('.search').simulate('click');
        const newWrapper = shallow(<ActionBar {...props} />);
        expect(newWrapper.find('.search-input').exists()).toBeTruthy();
    });

    it('sets order by filter', () => {
        const wrapper = shallow(<ActionBar {...props} />);
        wrapper.find('.filter').simulate('click');
        const newWrapper = shallow(<ActionBar {...props} />);
        newWrapper.find('.order').simulate('click');
        const newWrapper2 = shallow(<ActionBar {...props} />);
        const element = <i className="fas fa-sort-alpha-down-alt desc active" title="desc" />;
        expect(newWrapper2).toContainReact(element);
    });

    it('renders search clear button', () => {
        const wrapper = shallow(<ActionBar {...props} />);
        wrapper.find('.search').simulate('click');
        props.searchQuery = 'mock';
        const newWrapper = shallow(<ActionBar {...props} />);
        expect(newWrapper.find('.search-clear').exists()).toBeTruthy();
    });

    it('clear search button to work', () => {
        const wrapper = shallow(<ActionBar {...props} />);
        wrapper.find('.search').simulate('click');
        props.searchQuery = 'mock';
        const newWrapper = shallow(<ActionBar {...props} />);
        newWrapper.find('.search-clear').simulate('click');
        const newWrapper2 = shallow(<ActionBar {...props} />);
        expect(newWrapper2.find('.search-clear').exists()).not.toBeTruthy();
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import { ListContainerComponent as ListContainer } from './list-container';

describe('ListContainer Component', () => {
    let props = {};
    beforeEach(() => {
        props = {
            loading: false,
            error: false,
            shipments: [
                {
                    id: 'MI1000',
                    name: 'Mock Name',
                    cargo: [
                        {
                            type: 'Fabric',
                            description: '2000 Green T-shirts',
                            volume: '3'
                        }
                    ],
                    mode: 'sea',
                    type: 'M',
                    destination: 'Mock Destination',
                    origin: 'Mock Origin',
                    services: [
                        {
                            type: 'mock service'
                        }
                    ],
                    total: '1000',
                    status: 'NEW',
                    userId: 'MU1000'
                },
                {
                    id: 'MI1001',
                    name: 'Mock 2',
                    cargo: [
                        {
                            type: 'Fabric',
                            description: '1000 Blue T-shirts',
                            volume: '2'
                        }
                    ],
                    mode: 'sea',
                    type: 'M',
                    destination: 'Mock Destination',
                    origin: 'Mock Origin',
                    services: [
                        {
                            type: 'mock service'
                        }
                    ],
                    total: '1000',
                    status: 'NEW',
                    userId: 'MU1001'
                }
            ],
            loadShipments: jest.fn(),
            closeToast: jest.fn()
        };
        /* const wrapper = shallow(<ListContainer {...props} />);
        const initialState = {
            page: 2,
            filterStatus: false,
            sortBy: '',
            orderBy: 'asc',
            searchStatus: false,
            searchQuery: ''
        };
        wrapper.setState(initialState); */
    });

    it('shallow renders without crashing', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        expect(wrapper).toBeDefined();
    });

    it('renders loading', () => {
        props.loading = true;
        const wrapper = shallow(<ListContainer {...props} />);
        expect(wrapper.find('.loading').text()).toEqual('Loading...');
    });

    it('renders list', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        expect(wrapper.find('.list').exists()).toBeTruthy();
    });

    it('componentDidMount should call loadShipments', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        expect(instance.props.loadShipments).toHaveBeenCalled();
    });

    it('toggleFilters should update state', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        instance.toggleFilters();
        expect(instance.state.filterStatus).toBeTruthy();
        expect(instance.state.searchStatus).toBeFalsy();
    });

    it('setSortBy should update state', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        instance.setSortBy({ target: { innerText: 'name' } });
        expect(instance.state.sortBy).toMatch(/name/);
        expect(instance.props.loadShipments).toHaveBeenCalled();
    });

    it('setOrderBy should update state', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        instance.setOrderBy({ target: { getAttribute: () => 'desc' } });
        expect(instance.state.orderBy).toMatch(/desc/);
        expect(instance.props.loadShipments).toHaveBeenCalled();
    });

    it('toggleSearch should update state', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        instance.toggleSearch();
        expect(instance.state.searchStatus).toBeTruthy();
        expect(instance.state.filterStatus).toBeFalsy();
        expect(instance.state.searchQuery).not.toMatch(/query/);
        expect(instance.props.loadShipments).toHaveBeenCalled();
    });

    it('onSearch should update state', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        instance.onSearch('query');
        expect(instance.state.page).toBe(1);
        expect(instance.state.searchQuery).toMatch(/query/);
        expect(instance.props.loadShipments).toHaveBeenCalled();
    });

    it('handleSearch should update search query', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        instance.handleSearch({ target: { value: 'new query' } });
        expect(instance.state.page).toBe(1);
        expect(instance.state.searchQuery).toMatch(/new query/);
        expect(instance.props.loadShipments).toHaveBeenCalled();
        expect(instance.props.loadShipments).toHaveBeenCalledWith({
            orderBy: 'asc',
            page: 1,
            query: 'new query',
            sortBy: ''
        });
    });

    it('clearSearch should clear search query', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        instance.clearSearch();
        expect(instance.state.page).toBe(1);
        expect(instance.state.searchQuery).not.toMatch(/query/);
        expect(instance.props.loadShipments).toHaveBeenCalled();
    });

    it('changePage should update page number', () => {
        const wrapper = shallow(<ListContainer {...props} />);
        const instance = wrapper.instance();
        let initialPage = 1;
        instance.changePage();
        expect(instance.state.page).toEqual(++initialPage);
        instance.changePage('next');
        expect(instance.state.page).toEqual(++initialPage);
        instance.changePage('previous');
        expect(instance.state.page).toEqual(--initialPage);
        expect(instance.props.loadShipments).toHaveBeenCalledWith({
            orderBy: 'asc',
            page: initialPage,
            query: '',
            sortBy: ''
        });
    });
});

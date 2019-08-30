import React from 'react';
import { shallow } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';

import { DetailsComponent as Details } from './details';

describe('Details Component', () => {
    // let store = null;
    let props = {};

    /* beforeAll(() => {
        // jest.mock('react-redux');
    }); */

    beforeEach(() => {
        /* const initialState = {
            details: {
                loading: false,
                error: false,
                shipment: {}
            }
        };
        const mockStore = configureMockStore();
        store = mockStore(initialState); */
        props = {
            loading: false,
            error: false,
            shipment: {
                id: 'MI1000',
                name: 'Mock Name',
                cargo: [
                    {
                        type: 'Fabric',
                        description: '1000 Blue T-shirts',
                        volume: '2'
                    },
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
            match: { params: 'MI1000' },
            loadShipmentDetails: jest.fn(),
            renameShipment: jest.fn(),
            closeToast: jest.fn()
        };
    });

    it('shallow renders without crashing', () => {
        const wrapper = shallow(<Details {...props} />);
        expect(wrapper).toBeDefined();
    });

    it('renders loading', () => {
        props.loading = true;
        const wrapper = shallow(<Details {...props} />);
        expect(wrapper.find('.loading').text()).toEqual('Loading...');
    });

    it('renders details', () => {
        const wrapper = shallow(<Details {...props} />);
        expect(wrapper.find('.details').exists()).toBeTruthy();
    });

    it('should not render details on error', () => {
        props.error = true;
        const wrapper = shallow(<Details {...props} />);
        expect(wrapper.find('.details').exists()).not.toBeTruthy();
    });

    it('renders correct details', () => {
        const wrapper = shallow(<Details {...props} />);
        expect(wrapper.find('.shipment-id code').text()).toEqual('MI1000');
        expect(wrapper.find('.name code').text()).toEqual('Mock Name');
    });

    it('componentDidMount should call loadShipmentDetails', () => {
        const wrapper = shallow(<Details {...props} />);
        const instance = wrapper.instance();
        expect(instance.props.loadShipmentDetails).toHaveBeenCalled();
    });

    it('correctly updates name', () => {
        const wrapper = shallow(<Details {...props} />);
        const instance = wrapper.instance();
        const newName = 'New Mock Name';
        const mockEditName = jest.spyOn(instance, 'editName').mockImplementation(() => {
            props.shipment.name = newName;
            return null;
        });
        instance.forceUpdate();
        wrapper.find('.edit').simulate('click');
        expect(mockEditName).toHaveBeenCalled();
        instance.forceUpdate();
        expect(wrapper.find('.name code').text()).toEqual(newName);
    });

    /* xit('updates name through redux', () => {
        const wrapper = shallow(<Details store={store} {...props} />);
        console.log(wrapper);
        wrapper.simulate('renameShipment');
        const actions = store.getActions();
        expect(actions).toEqual([{ type: 'RENAME_SHIPMENT' }]);
    }); */
});

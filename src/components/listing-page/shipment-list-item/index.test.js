import React from 'react';
import { shallow } from 'enzyme';

import ShipmentListItem from './index';

describe('ShipmentListItem Component', () => {
    const props = {
        shipment: {
            id: 'MI1000',
            name: 'Mock',
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
        title: false
    };

    it('shallow renders without crashing', () => {
        shallow(<ShipmentListItem {...props} />);
    });

    it('renders list row', () => {
        const wrapper = shallow(<ShipmentListItem {...props} />);
        expect(wrapper.find('.list-item').exists()).toBeTruthy();
    });

    it('renders data as passed in props', () => {
        const wrapper = shallow(<ShipmentListItem {...props} />);
        expect(wrapper.find('.id').text()).toEqual('MI1000');
        expect(wrapper.find('.status').text()).toEqual('New');
    });
});

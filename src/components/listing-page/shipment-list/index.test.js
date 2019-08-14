import React from 'react';
import { shallow } from 'enzyme';

import ShipmentList from './index';

describe('ShipmentList Component', () => {
    const props = {
        shipments: [
            {
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
            {
                id: 'MI1001',
                name: 'Mock',
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
                status: 'ACTIVE',
                userId: 'MU1001'
            }
        ]
    };

    it('shallow renders without crashing', () => {
        shallow(<ShipmentList {...props} />);
    });

    it('renders list rows', () => {
        const wrapper = shallow(<ShipmentList {...props} />);
        expect(wrapper.find('.shipment-list-item')).toHaveLength(3);
    });
});

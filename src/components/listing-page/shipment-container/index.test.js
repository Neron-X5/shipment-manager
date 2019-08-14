import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import ShipmentContainer from './index';

describe('ShipmentContainer Component', () => {
    const mockStore = configureMockStore();
    const store = mockStore({ list: {} });
    const props = {
        loading: false,
        error: false,
        shipments: [
            {
                id: 'MI1000',
                name: 'Mock',
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
        ]
    };

    it('shallow renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <ShipmentContainer {...props} />
            </Provider>
        );
    });

    xit('renders details', () => {
        const wrapper = shallow(<ShipmentContainer store={store} {...props} />).dive();
        expect(wrapper.find('.details').exists()).toBeTruthy();
    });
});

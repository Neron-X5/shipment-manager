import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './index';

describe('ListItem Component', () => {
    let props = {};
    beforeEach(() => {
        props = {
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
    });

    it('shallow renders without crashing', () => {
        const wrapper = shallow(<ListItem {...props} />);
        expect(wrapper).toBeDefined();
    });

    it('renders list row', () => {
        const wrapper = shallow(<ListItem {...props} />);
        expect(wrapper.find('.list-item').exists()).toBeTruthy();
    });

    it('renders data as passed in props', () => {
        const wrapper = shallow(<ListItem {...props} />);
        expect(wrapper.find('.id').text()).toEqual('MI1000');
        expect(wrapper.find('.total').text()).toEqual('$1000');
        expect(wrapper.find('.status').text()).toEqual('New');
    });

    it('renders title row', () => {
        props.title = true;
        const wrapper = shallow(<ListItem {...props} />);
        expect(wrapper.find('.title').exists()).toBeTruthy();
        expect(wrapper.find('.chevron').exists()).not.toBeTruthy();
    });
});

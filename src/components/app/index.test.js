import React from 'react';
import { shallow } from 'enzyme';

import App from './index';

describe('App Component', () => {
    it('shallow renders without crashing', () => {
        shallow(<App />);
    });

    it('renders header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.header').exists()).toBeTruthy();
        expect(wrapper.find('.header').text()).toBe('FreightHub');
    });
});

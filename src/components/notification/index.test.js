import React from 'react';
import { shallow } from 'enzyme';

import Notification from './index';

describe('Notification Component', () => {
    const props = {
        message: '',
        clickHandler: () => {
            return false;
        }
    };

    it('shallow renders without crashing', () => {
        shallow(<Notification {...props} />);
    });

    it('renders message', () => {
        props.message =
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
        const wrapper = shallow(<Notification {...props} />);
        expect(wrapper.find('.toast-message').exists()).toBeTruthy();
    });

    it('renders close', () => {
        const wrapper = shallow(<Notification {...props} />);
        expect(wrapper.find('.toast-close').exists()).toBeTruthy();
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import Notification from './index';

describe('Notification Component', () => {
    let props = {};
    beforeEach(() => {
        props = {
            displayStatus: true,
            message: '',
            clickHandler: jest.fn(() => {
                props = { ...props, displayStatus: false };
                // props.displayStatus = false;
                return null;
            })
        };
    });

    it('shallow renders without crashing', () => {
        const wrapper = shallow(<Notification {...props} />);
        expect(wrapper).toBeDefined();
    });

    it('should not render if displayStatus is false', () => {
        props.displayStatus = false;
        const wrapper = shallow(<Notification {...props} />);
        expect(wrapper.find('.toast-container').exists()).not.toBeTruthy();
    });

    it('renders message', () => {
        const message =
            'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
        props.message = message;
        const wrapper = shallow(<Notification {...props} />);
        expect(wrapper.find('.toast-message').exists()).toBeTruthy();
        expect(wrapper.find('.toast-message').text()).toEqual(message);
    });

    it('renders close', () => {
        const wrapper = shallow(<Notification {...props} />);
        expect(wrapper.find('.toast-close').exists()).toBeTruthy();
    });

    it('close button should call click handler', () => {
        const wrapper = shallow(<Notification {...props} />);
        wrapper.find('.toast-close').simulate('click');
        // expect(props.clickHandler.mock.calls.length).toBe(1);
        // expect(props.clickHandler).toHaveBeenCalledTimes(1);
        expect(props.clickHandler).toHaveBeenCalled();
        // wrapper.update();
        const newWrapper = shallow(<Notification {...props} />);
        expect(newWrapper.find('.toast-container').exists()).not.toBeTruthy();
    });
});

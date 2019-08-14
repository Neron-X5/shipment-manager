import { shallow } from 'enzyme';
import * as expect from 'expect';
import * as React from 'react';

import Shipments from '../../components/Shipments';
import { shipmentStore } from '../../stores/shipments.store';

describe('Render <Shipments /> component', () => {
  const props = {
    store: shipmentStore,
  };

  const wrapper = shallow(<Shipments {...props} />);

  it('renders the <Shipment /> component', () => {
    shipmentStore.setLoading(false);
    expect(wrapper.find('.heading')).toBeTruthy();
    expect(wrapper.find('.heading').text()).toBe('FreightHub shipments');
    expect(wrapper.find('Pagination').exists()).toBe(true);
  });
});

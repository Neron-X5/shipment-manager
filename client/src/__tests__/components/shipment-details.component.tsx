import { shallow } from 'enzyme';
import * as expect from 'expect';
import * as React from 'react';

import ShipmentDetails from '../../components/ShipmentDetails';
import { shipments } from '../../mocks/shipments';
import { shipmentDetailsStore } from '../../stores/shipment-details.store';

describe('Render <Shipment/> component', () => {
  const props = {
    store: shipmentDetailsStore,
    match: {
      isExact: true,
      params: {
        shipmentId: 'S1000',
      },
      path: '/shipments/S1000',
      url: '/shipments/S1000',
    },
  };

  const wrapper = shallow(<ShipmentDetails {...props} />);

  beforeEach(() => {
    shipmentDetailsStore.setShipment([shipments[0]]);
    shipmentDetailsStore.setLoading(false);
  });

  it('renders <Shipment /> component', () => {
    expect(wrapper.find('Modal').exists()).toBeTruthy();
    expect(wrapper.find('ShipmentDetailInfo').exists()).toBeTruthy();
    expect(wrapper.find('h3').text()).toEqual('Shipment name: ');
  });
});

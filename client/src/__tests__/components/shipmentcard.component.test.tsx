import { shallow } from 'enzyme';
import * as expect from 'expect';
import * as React from 'react';

import ShipmentCard from '../../components/ShipmentCard';

describe('Render <ShipmentCard /> component', () => {
  const props = {
    id: '1',
    name: 'T-shirts',
    cargoLength: 2,
    total: 1000,
    origin: 'Shanghai Port',
  };

  const wrapper = shallow(<ShipmentCard {...props} />);

  it('renders the <Shipment /> card', () => {
    expect(wrapper.find('.shipment-card-container').exists()).toBeTruthy();
    expect(
      wrapper.find('.shipment-card-content__shipment-origin').text(),
    ).toEqual('Shanghai Port');

    expect(
      wrapper.find('.shipment-card-content__shipment-name').text(),
    ).toEqual('T-shirts');
  });
});

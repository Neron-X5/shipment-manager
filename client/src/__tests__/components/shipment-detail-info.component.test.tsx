import { shallow } from 'enzyme';
import * as expect from 'expect';
import * as React from 'react';

import ShipmentDetailInfo from '../../components/ShipmentDetailInfo';

describe('Render <ShipmentDetailInfo />', () => {
  const props = {
    name: 'Origin',
    value: 'Shanghai Port',
  };

  const wrapper = shallow(<ShipmentDetailInfo {...props} />);

  it('renders ShipmentDetailInfo', () => {
    expect(
      wrapper.find('.shipment-detail-info-container').exists(),
    ).toBeTruthy();

    expect(
      wrapper.find('.shipment-detail-info-container__name').text(),
    ).toEqual('Origin');

    expect(
      wrapper.find('.shipment-detail-info-container__value').text(),
    ).toEqual('Shanghai Port');
  });
});

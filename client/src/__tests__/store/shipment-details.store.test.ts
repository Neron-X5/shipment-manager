import * as expect from 'expect';
import { shipments } from '../../mocks/shipments';
import { shipmentDetailsStore } from '../../stores/shipment-details.store';

describe('Shipment Details Test', () => {
  afterEach(() => {
    shipmentDetailsStore.setShipment([]);
  });

  it('should set a shipment detail', () => {
    shipmentDetailsStore.setShipment([shipments[0]]);
    expect(shipmentDetailsStore.shipment.length).toEqual(1);
  });

  it('should set shipment name', () => {
    shipmentDetailsStore.setShipmentName('rotimi');
    expect(shipmentDetailsStore.shipmentName).toEqual('rotimi');
  });
});

import * as expect from 'expect';
import { shipments } from '../../mocks/shipments';
import { shipmentStore } from '../../stores/shipments.store';

describe('Shipment Store Tests', () => {
  afterEach(() => {
    shipmentStore.setShipments([]);
  });

  it('should set shipments', () => {
    shipmentStore.setShipments(shipments);
    expect(shipmentStore.shipments.length).toEqual(2);
  });

  it('should search shipments', () => {
    // first set shipments
    shipmentStore.setShipments(shipments);
    // search shipments
    shipmentStore.searchShipments('s1000');
    expect(shipmentStore.searchQuery).toEqual('s1000');
    expect(shipmentStore.filteredShipments.length).toEqual(1);
    shipmentStore.searchShipments('hello');
    expect(shipmentStore.filteredShipments.length).toEqual(0);
  });

  it('should compute the total number of shipments correctly', () => {
    // first set shipments
    shipmentStore.setShipments(shipments);
    expect(shipmentStore.totalNumberOfShipments).toEqual(2);
  });

  it('should sort shipments', () => {
    // first set shipments
    shipmentStore.setShipments(shipments);
    // sort by name
    shipmentStore.sortShipments('total');

    // 3000 is the highest total in the mock data
    const indexOfLargestTotal = shipmentStore.shipments.findIndex(
      el => el.total === 3000,
    );

    expect(indexOfLargestTotal).toEqual(0);
  });
});

import { APP_CONSTANTS } from '../../configs/constants';

import detailsReducer from '../details';

describe('List Reducer', () => {
    const defaultState = { loading: false, error: false, shipment: {} };
    const shipment = {
        id: 'MI1000',
        name: 'Mock Name',
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
    };

    it('Show loading', () => {
        const nextState = detailsReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.DETAILS_LOADING,
            payload: true
        });
        expect(nextState.loading).toBeTruthy();
    });

    it('Hide loading', () => {
        const nextState = detailsReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.DETAILS_LOADING,
            payload: false
        });
        expect(nextState.loading).toBeFalsy();
    });

    it('Close error notification', () => {
        const nextState = detailsReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.CLOSE_DETAILS_TOAST
        });
        expect(nextState.error).toBeFalsy();
    });

    it('LOAD_SHIPMENT_DETAILS error case', () => {
        const nextState = detailsReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.LOAD_SHIPMENT_DETAILS,
            payload: {}
        });
        expect(nextState.loading).toBeFalsy();
        expect(nextState.error).toBeTruthy();
    });

    it('LOAD_SHIPMENT_DETAILS success case', () => {
        const nextState = detailsReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.LOAD_SHIPMENT_DETAILS,
            payload: shipment
        });
        expect(nextState.loading).toBeFalsy();
        expect(nextState.error).toBeFalsy();
        expect(nextState.shipment).toEqual(expect.objectContaining({ id: 'MI1000' }));
        expect(nextState.shipment).toEqual(expect.objectContaining({ name: 'Mock Name' }));
    });

    it('RENAME_SHIPMENT success case', () => {
        const newName = 'New Mock Name';
        const nextState = detailsReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.RENAME_SHIPMENT,
            payload: { ...shipment, name: newName }
        });
        expect(nextState.loading).toBeFalsy();
        expect(nextState.error).toBeFalsy();
        expect(nextState.shipment).toEqual(expect.objectContaining({ name: newName }));
    });
});

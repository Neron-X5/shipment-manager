import { APP_CONSTANTS } from '../../configs/constants';

import listReducer from '../list';

describe('List Reducer', () => {
    const defaultState = { loading: false, error: false, shipments: [] };
    const shipments = [
        {
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
        }
    ];

    it('Show loading', () => {
        const nextState = listReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.LIST_LOADING,
            payload: true
        });
        expect(nextState.loading).toBeTruthy();
    });

    it('Hide loading', () => {
        const nextState = listReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.LIST_LOADING,
            payload: false
        });
        expect(nextState.loading).toBeFalsy();
    });

    it('Close error notification', () => {
        const nextState = listReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.CLOSE_LIST_TOAST
        });
        expect(nextState.error).toBeFalsy();
    });

    it('LOAD_SHIPMENTS error case', () => {
        const nextState = listReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.LOAD_SHIPMENTS,
            payload: []
        });
        expect(nextState.loading).toBeFalsy();
        expect(nextState.error).toBeTruthy();
    });

    it('LOAD_SHIPMENTS success case', () => {
        const nextState = listReducer(defaultState, {
            type: APP_CONSTANTS.ACTION_TYPE.LOAD_SHIPMENTS,
            payload: shipments
        });
        expect(nextState.loading).toBeFalsy();
        expect(nextState.error).toBeFalsy();
        expect(nextState.shipments).toEqual(expect.objectContaining(shipments));
    });
});

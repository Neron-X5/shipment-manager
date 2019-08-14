import service from '../utility/service-call';
import store from '../reducers/store';

import { APP_CONSTANTS } from '../configs/constants';
import { getStorage, setStorage } from '../utility/storage';

export const toggleLoader = (bool = false) => ({
    type: 'LOADING',
    payload: bool
});

export const loadShipments = url => {
    store.dispatch(toggleLoader(true));
    return {
        type: 'LOAD_SHIPMENTS',
        payload: service({ url }).then(data => {
            const storageData = getStorage(APP_CONSTANTS.STORAGE_KEY);
            const keys = Object.keys(storageData) || [];
            if (!keys.length) {
                return data;
            }
            return data.map(item => {
                if (keys.includes(item.id)) {
                    item.name = storageData[item.id];
                }
                return item;
            });
        })
    };
};

export const renameShipment = (shipment, shipmentId = '', name = '') => {
    store.dispatch(toggleLoader(true));
    return {
        type: 'RENAME_SHIPMENT',
        payload: setStorage({ storageKey: APP_CONSTANTS.STORAGE_KEY, dataKey: shipmentId, value: name }).then(data => [
            { ...shipment, name: data }
        ])
    };
};

export const closeToast = () => ({
    type: 'CLOSE_TOAST'
});

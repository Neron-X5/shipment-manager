import service from '../utility/service-call';
import store from '../reducers/store';

import { APP_CONSTANTS } from '../configs/constants';
import { getStorage, setStorage } from '../utility/storage';

export const toggleLoader = (bool = false) => ({
    type: APP_CONSTANTS.ACTION_TYPE.DETAILS_LOADING,
    payload: bool
});

export const loadShipmentDetails = shipmentId => {
    store.dispatch(toggleLoader(true));
    return {
        type: APP_CONSTANTS.ACTION_TYPE.LOAD_SHIPMENT_DETAILS,
        payload: service({
            url: APP_CONSTANTS.API.LOAD_SHIPMENT_DETAILS.replace(/\{shipment_id\}/gi, shipmentId)
        }).then(data => {
            const storageData = getStorage(APP_CONSTANTS.STORAGE_KEY);
            const keys = Object.keys(storageData) || [];
            if (!keys.length) {
                return data[0];
            }
            return data.map(item => {
                if (keys.includes(item.id)) {
                    item.name = storageData[item.id];
                }
                return item;
            })[0];
        })
    };
};

export const renameShipment = (shipment, shipmentId = '', name = '') => {
    store.dispatch(toggleLoader(true));
    return {
        type: APP_CONSTANTS.ACTION_TYPE.RENAME_SHIPMENT,
        payload: setStorage({ storageKey: APP_CONSTANTS.STORAGE_KEY, dataKey: shipmentId, value: name }).then(data => ({
            ...shipment,
            name: data
        }))
    };
};

export const closeToast = () => ({
    type: APP_CONSTANTS.ACTION_TYPE.CLOSE_DETAILS_TOAST
});

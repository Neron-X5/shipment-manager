import service from '../utility/service-call';
import store from '../reducers/store';

import { APP_CONSTANTS } from '../configs/constants';
import { getStorage } from '../utility/storage';

export const toggleLoader = (bool = false) => ({
    type: APP_CONSTANTS.ACTION_TYPE.LIST_LOADING,
    payload: bool
});

export const loadShipments = ({ query = '', page = 1, sortBy = '', orderBy = 'asc' }) => {
    store.dispatch(toggleLoader(true));
    return {
        type: APP_CONSTANTS.ACTION_TYPE.LOAD_SHIPMENTS,
        payload: service({
            url: APP_CONSTANTS.API.LOAD_SHIPMENTS.replace(/\{query\}/gi, query)
                .replace(/\{page\}/gi, page)
                .replace(/\{limit\}/gi, APP_CONSTANTS.PAGE_LIMIT)
                .replace(/\{sort_by\}/gi, sortBy)
                .replace(/\{order_by\}/gi, orderBy)
        }).then(data => {
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

export const closeToast = () => ({
    type: APP_CONSTANTS.ACTION_TYPE.CLOSE_LIST_TOAST
});

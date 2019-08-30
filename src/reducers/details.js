import { APP_CONSTANTS } from '../configs/constants';

const defaultState = { loading: false, error: false, shipment: {} };

const listReducer = (state = defaultState, action) => {
    switch (action.type) {
        case APP_CONSTANTS.ACTION_TYPE.DETAILS_LOADING: {
            return { ...state, loading: action.payload };
        }
        case APP_CONSTANTS.ACTION_TYPE.LOAD_SHIPMENT_DETAILS: {
            const { payload } = action;
            if (payload.id) {
                return { ...state, loading: false, error: false, shipment: payload };
            }
            return { ...state, loading: false, error: true };
        }
        case APP_CONSTANTS.ACTION_TYPE.RENAME_SHIPMENT: {
            const { payload } = action;
            return { ...state, loading: false, error: false, shipment: payload };
        }
        case APP_CONSTANTS.ACTION_TYPE.CLOSE_DETAILS_TOAST: {
            return { ...state, error: false };
        }
        default:
            return state;
    }
};

export default listReducer;

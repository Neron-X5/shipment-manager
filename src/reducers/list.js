import { APP_CONSTANTS } from '../configs/constants';

const defaultState = { loading: false, error: false, shipments: [] };

const listReducer = (state = defaultState, action) => {
    switch (action.type) {
        case APP_CONSTANTS.ACTION_TYPE.LIST_LOADING: {
            return { ...state, loading: action.payload };
        }
        case APP_CONSTANTS.ACTION_TYPE.LOAD_SHIPMENTS: {
            const { payload } = action;
            if (payload.length) {
                return { ...state, loading: false, error: false, shipments: payload };
            }
            return { ...state, loading: false, error: true };
        }
        case APP_CONSTANTS.ACTION_TYPE.CLOSE_LIST_TOAST: {
            return { ...state, error: false };
        }
        default:
            return state;
    }
};

export default listReducer;

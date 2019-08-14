const listReducer = (state = { loading: false, error: false, shipments: [] }, action) => {
    switch (action.type) {
        case 'LOADING': {
            return { ...state, loading: action.payload };
        }
        case 'LOAD_SHIPMENTS': {
            const { payload } = action;
            if (payload.length) {
                return { ...state, loading: false, error: false, shipments: payload };
            }
            return { ...state, loading: false, error: true };
        }
        case 'RENAME_SHIPMENT': {
            const { payload } = action;
            return { ...state, loading: false, error: false, shipments: payload };
        }
        case 'CLOSE_TOAST': {
            return { ...state, error: false };
        }
        default:
            return state;
    }
};

export default listReducer;

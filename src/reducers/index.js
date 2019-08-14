import { combineReducers } from 'redux';

import ListReducer from './shipment';

const rootReducer = combineReducers({
    list: ListReducer
});

export default rootReducer;

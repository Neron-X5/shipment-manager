import { combineReducers } from 'redux';

import ListReducer from './list';
import DetailsReducer from './details';

const rootReducer = combineReducers({
    list: ListReducer,
    details: DetailsReducer
});

export default rootReducer;

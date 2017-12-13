import { combineReducers } from 'redux';

import filter from './FilterReducer';
import typeData from './TypeReducer';
import page from './PageReducer';

const reducer = combineReducers({
    content: typeData,
    filter: filter,
    page: page,
})

export default reducer;
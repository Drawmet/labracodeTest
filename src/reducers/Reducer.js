import { combineReducers } from 'redux';

import content from './ContentReducer';
import composition from './CompositionReducer';

const reducer = combineReducers({
    data: content,
    composition: composition,
})

export default reducer;
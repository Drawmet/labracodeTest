import actionsTypes from '../actions/actionsTypes';

const initialState = {
    data: '',
    loaded: false,
  };

  
let reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.CHANGE_FILTER: 
            return {
                data: action.data,
                loaded: true
            };
        case actionsTypes.SWITCH_TYPE: 
            return {
                data: action.data,
                loaded: true
            };
        case actionsTypes.CHANGE_PAGE: 
            return {
                data: action.data,
                loaded: true
            };
        case actionsTypes.SEARCH: 
            return {
                data: action.data,
                loaded: true
            };
        default: 
            return state;
    }
}

export default reducer;
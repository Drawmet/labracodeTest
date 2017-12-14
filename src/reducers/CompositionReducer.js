import actionsTypes from '../actions/actionsTypes';

const initialState = {
    data: '',
    loaded: false,
  };

let changePage = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.GET_DETAILS: 
            return {
                data: action.data,
                loaded: true
            };
        default: 
            return state;
    }
}

export default changePage;
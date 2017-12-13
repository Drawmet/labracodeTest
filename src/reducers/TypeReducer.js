import actionsTypes from '../actions/actionsTypes';

const initialState = {
    data: '',
    loaded: false
  };

let changeType = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.SWITCH_TYPE: 
            return {
                data: action.data,
                loaded: true
            }
        default: 
            return state;
    }
}

export default changeType;
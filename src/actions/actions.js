import actionsTypes from './actionsTypes';
import api from '../data/api';

let actions = {
    changeType(typeData){
        return dispatch => {
            api.getData(typeData)
                .then((data) => {
                    dispatch({
                        type: actionsTypes.SWITCH_TYPE,
                        data,
                    })
                })
        }
    },
    changeFilter(typeData, filter){
        return dispatch => {
            api.getData(typeData, filter)
                .then((data) => {
                    dispatch({
                        type: actionsTypes.CHANGE_FILTER,
                        data,
                    })
                    
            });
        }   
    },
    changePage(typeData, filter, page){
        return dispatch => {
            api.getData(typeData, filter, page)
            .then((data) => {
                dispatch({
                    type: actionsTypes.CHANGE_PAGE,
                    data,
                })
            })
        }
    }
}

export default actions
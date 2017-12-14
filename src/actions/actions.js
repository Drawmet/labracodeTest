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
    },
    search(typeData, query, page){
        return dispatch => {
            api.getSearch(typeData, query)
            .then((data) => {
                dispatch({
                    type: actionsTypes.SEARCH,
                    data,
                })
            })
        }
    },
    getComposition(typeData, id){
        return dispatch => {
            api.getDetails(typeData, id)
                .then((data) => {
                    dispatch({
                        type: actionsTypes.GET_DETAILS,
                        data
                    })
                })
        }
    }
}

export default actions
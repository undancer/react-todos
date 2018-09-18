import {Reducer} from "redux";
import {MODE_CREATE} from "../utils/mode";
import {FILTER_ALL} from "../utils/fitler";

interface TodoState {

}

const initialState = {
    mode: MODE_CREATE,
    filter: FILTER_ALL,
    query: '',
};

const todoReducer: Reducer = (state: TodoState = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state};
        case 'CHANGE_MODE':
            return {...state, mode: action.mode};
        case 'CHANGE_FILTER':
            return {...state, filter: action.filter};
        case 'SET_SEARCH_QUERY':
            return {...state, query: action.query || ''};
        default:
            return state;
    }

};

export default todoReducer;

import {Reducer} from "redux";
import {MODE_CREATE} from "../utils/mode";
import {FILTER_ALL} from "../utils/fitler";
import {addToList, getAll} from "../utils/todo";

interface TodoState {
    items: any,
}

const initialState = {
    mode: MODE_CREATE,
    filter: FILTER_ALL,
    query: '',
    items: getAll(),
};

const todoReducer: Reducer = (state: TodoState = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_NEW_TODO':
            let updatedList = addToList(state.items, {text: action.value, completed: false});
            return {...state, items: updatedList};
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

import {Reducer} from "redux";
import {MODE_CREATE} from "../utils/mode";
import {FILTER_ALL} from "../utils/fitler";
import {addToList, deleteItem, getAll, updateStatus, updateText} from "../utils/todo";

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
        case 'ADD_NEW_TODO': {
            const updatedList = addToList(state.items, {text: action.value, completed: false});
            return {...state, items: updatedList};
        }
        case 'CHANGE_MODE':
            return {...state, mode: action.mode};
        case 'CHANGE_FILTER':
            return {...state, filter: action.filter};
        case 'CHANGE_STATUS': {
            const updatedList = updateStatus(state.items, action.id, action.completed);
            return {...state, items: updatedList};
        }
        case 'CHANGE_TODO': {
            const updatedList = updateText(state.items, action.id, action.text);
            return {...state, items: updatedList, editing: null};
        }
        case 'SET_SEARCH_QUERY':
            return {...state, query: action.query || ''};
        case 'EDIT':
            return {...state, editing: action.id};
        case 'CANCEL':
            return {...state, editing: null};
        case 'DESTROY': {
            const updatedList = deleteItem(state.items, action.id);
            return {...state, items: updatedList}
        }
        default:
            return state;
    }

};

export default todoReducer;

import {Reducer} from "redux";
import {MODE_CREATE} from "../utils/mode";
import {FILTER_ALL} from "../utils/fitler";
import {addToList, deleteItem, getAll, updateStatus, updateText} from "../utils/todo";
import {
    TYPE_ADD_NEW_TODO,
    TYPE_CANCEL,
    TYPE_CHANGE_STATUS,
    TYPE_CHANGE_TODO,
    TYPE_CLEAR_COMPLETED,
    TYPE_DESTROY,
    TYPE_EDIT,
    TYPE_TOGGLE_ALL
} from "../actions";

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
        case TYPE_ADD_NEW_TODO: {
            const updatedList = addToList(state.items, {title: action.value, completed: false});
            return {...state, items: updatedList};
        }
        // case TYPE_CHANGE_MODE:
        //     return {...state, mode: action.mode};
        // case TYPE_CHANGE_FILTER:
        //     return {...state, filter: action.filter};
        case TYPE_CHANGE_STATUS: {
            const updatedList = updateStatus(state.items, action.id, action.completed);
            return {...state, items: updatedList};
        }
        case TYPE_CHANGE_TODO: {
            const updatedList = updateText(state.items, action.id, action.text);
            return {...state, items: updatedList, editing: null};
        }
        // case TYPE_SET_SEARCH_QUERY:
        //     return {...state, query: action.query || ''};
        case TYPE_EDIT:
            return {...state, editing: action.id};
        case TYPE_CANCEL:
            return {...state, editing: null};
        case TYPE_DESTROY: {
            const updatedList = deleteItem(state.items, action.id);
            return {...state, items: updatedList}
        }
        case TYPE_TOGGLE_ALL: {
            const updatedList = state.items.map((item: any) => ({...item, completed: action.completed}));
            return {...state, items: updatedList}
        }
        case TYPE_CLEAR_COMPLETED: {
            const updatedList = state.items.filter((item: any) => item.completed === false);
            return {...state, items: updatedList};
        }
        default:
            return state;
    }

};

export default todoReducer;

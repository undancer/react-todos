import {Reducer} from "redux";
import {MODE_CREATE} from "../utils/mode";

interface TodoState {

}

const initialState = {
    mode: MODE_CREATE
};

const todoReducer: Reducer = (state: TodoState = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state};
        case 'CHANGE_MODE':
            return {...state, mode: action.mode};
        default:
            return state;
    }

};

export default todoReducer;

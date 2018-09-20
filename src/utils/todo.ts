import update from "immutability-helper";
import ITodo from "../models/ITodo";

const getAll = () => {
    return [
        {
            id: 1,
            title: 'Learn Javascript',
            completed: false
        },
        {
            id: 2,
            title: 'Learn React',
            completed: false
        },
        {
            id: 3,
            title: 'Build a React App',
            completed: false
        }
    ]
};

let todoCounter = 1;
const getNextId = () => {
    return getAll().length + todoCounter++;
};

const addToList = (list: ITodo[], data: any) => {
    let item = Object.assign({id: getNextId()}, data);
    return list.concat([item]);

};

//eslint-disable-next-line
// const getItemById = (itemId) => {
//     return getAll().find(item => item.id === itemId);
// };

const updateStatus = (items: ITodo[], itemId: number, completed: boolean) => {

    let index = items.findIndex((item: ITodo) => item.id === itemId);

    return update(items, {
        [index]: {
            completed: {
                $set: completed
            }
        }
    })

};

const updateText = (items: ITodo[], itemId: number, title: string) => {
    let index = items.findIndex((item: ITodo) => item.id === itemId);

    return update(items, {
        [index]: {
            title: {
                $set: title
            }
        }
    })

};

const deleteItem = (items: any, itemId: number) => {
    let index = items.findIndex((item: any) => item.id === itemId);
    return [...items.slice(0, index), ...items.slice(index + 1)]
};

export {getAll, addToList, updateStatus, updateText, deleteItem};

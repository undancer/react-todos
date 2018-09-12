import update from "immutability-helper";

const getAll = () => {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false
        }
    ]
};

let todoCounter = 1;
const getNextId = () => {
    return getAll().length + todoCounter++;
};

const addToList = (list, data) => {
    let item = Object.assign({id: getNextId()}, data);
    return list.concat([item]);

};

const getItemById = (itemId) => {
    return getAll().find(item => item.id === itemId);
};

const updateStatus = (items, itemId, completed) => {

    let index = items.findIndex(item => item.id === itemId);

    return update(items, {
        [index]: {
            completed: {
                $set: completed
            }
        }
    })

};

export {getAll, addToList, updateStatus};

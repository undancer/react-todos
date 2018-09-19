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

const addToList = (list: any, data: any) => {
    let item = Object.assign({id: getNextId()}, data);
    return list.concat([item]);

};

//eslint-disable-next-line
// const getItemById = (itemId) => {
//     return getAll().find(item => item.id === itemId);
// };

const updateStatus = (items: any, itemId: number, completed: boolean) => {

    let index = items.findIndex((item: any) => item.id === itemId);

    return update(items, {
        [index]: {
            completed: {
                $set: completed
            }
        }
    })

};

const updateText = (items: any, itemId: number, text: string) => {
    let index = items.findIndex((item: any) => item.id === itemId);

    return update(items, {
        [index]: {
            text: {
                $set: text
            }
        }
    })

};

const deleteItem = (items: any, itemId: number) => {
    let index = items.findIndex((item: any) => item.id === itemId);
    return [...items.slice(0, index), ...items.slice(index + 1)]
};

export {getAll, addToList, updateStatus, updateText, deleteItem};

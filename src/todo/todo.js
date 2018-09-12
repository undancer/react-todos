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

export {getAll, addToList};

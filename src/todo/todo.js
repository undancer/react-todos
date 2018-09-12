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

const createNew = (text) => {
    let item = {
        id: this.state.items.length + 1,
        text: text
    };
    return item;
};

export {getAll, createNew};

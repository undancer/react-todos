import React from 'react';
import TodoList from "./TodoList";

const App = () => {
    let title = 'Things to do';
    return (
        <div className="container">
            <div className="row">
                <TodoList
                    title={title}
                />
            </div>
        </div>
    );
};

export default App;

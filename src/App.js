import React from 'react';
import TodoList from "./TodoList";
import StateProvider from "./StateProvider";

const App = () => {
    let title = 'Things to do';
    return (
        <div className="container">
            <div className="row">
                <StateProvider>
                    <TodoList
                        title={title}
                    />
                </StateProvider>
            </div>
        </div>
    );
};

export default App;

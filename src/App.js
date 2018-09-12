import React from 'react';
import TodoList from "./TodoList";
import StateProvider from "./StateProvider";
import KeyStrokeHandler from "./KeyStrokeHandler";

const App = () => {
    let title = 'Things to do';
    return (
        <div className="container">
            <div className="row">
                <StateProvider>
                    <KeyStrokeHandler>
                        <TodoList
                            title={title}
                        />
                    </KeyStrokeHandler>
                </StateProvider>
            </div>
        </div>
    );
};

export default App;

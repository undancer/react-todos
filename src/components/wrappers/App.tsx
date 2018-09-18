import * as React from 'react';
import TodoListContainer from "../../containers/TodoListContainer";
import TodoAppContainer from "../../containers/TodoAppContainer";

const App = () => {
    let title = 'Things to do';
    return (
        <TodoAppContainer>
            <TodoListContainer title={title}/>
        </TodoAppContainer>
    );
};

export default App;

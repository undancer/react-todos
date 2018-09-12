import React from 'react';
import TodoList from "../ui/TodoList";
import StateProvider from "./StateProvider";
import KeyStrokeHandler from "./KeyStrokeHandler";
import {Container} from "reactstrap";

const App = () => {
    let title = 'Things to do';
    return (
        <Container>
            <StateProvider>
                <KeyStrokeHandler>
                    <TodoList
                        title={title}
                    />
                </KeyStrokeHandler>
            </StateProvider>
        </Container>
    );
};

export default App;

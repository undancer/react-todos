import * as React from 'react';
import StateProvider from "./StateProvider";
import KeyStrokeHandler from "./KeyStrokeHandler";
import {Container} from "reactstrap";
import TodoListContainer from "../../containers/TodoListContainer";

const App = () => {
    let title = 'Things to do';
    return (
        <Container>
            <StateProvider>
                <KeyStrokeHandler>
                    <TodoListContainer
                        title={title}
                    />
                </KeyStrokeHandler>
            </StateProvider>
        </Container>
    );
};

export default App;

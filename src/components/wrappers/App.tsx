import * as React from 'react';
import KeyStrokeHandler from "./KeyStrokeHandler";
import {Container, Row} from "reactstrap";
import TodoListContainer from "../../containers/TodoListContainer";

const App = () => {
    let title = 'Things to do';
    return (
        <Container>
            <Row>
                <KeyStrokeHandler>
                    <TodoListContainer
                        title={title}
                    />
                </KeyStrokeHandler>
            </Row>
        </Container>
    );
};

export default App;

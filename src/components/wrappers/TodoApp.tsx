import * as React from "react";
import {Col, Container, Row} from "reactstrap";
import {getNextModeByKey} from "../../utils/mode";

interface ITodoAppProps {
    mode: string
    changeMode: any
}


class TodoApp extends React.Component<ITodoAppProps> {

    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyUp);
    }

    handleKeyUp = (event: KeyboardEvent) => {
        const {mode, changeMode} = this.props;
        const nextMode = getNextModeByKey(mode, event.keyCode);
        if (nextMode !== mode) {
            event.preventDefault();
            changeMode(nextMode);
        }
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TodoApp;

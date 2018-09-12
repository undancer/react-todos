import {wrapChildrenWith} from "../../utils/common";
import React from 'react';
import {getNextModeByKey} from "../../utils/mode";
import {Col} from "reactstrap";

class KeyStrokeHandler extends React.Component {

    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyUp);
    }

    handleKeyUp = (event) => {
        const {mode} = this.props.data;
        const nextMode = getNextModeByKey(mode, event.keyCode);
        if (nextMode !== mode) {
            event.preventDefault();
            this.props.actions.changeMode(nextMode);
        }
    };

    render() {
        return (
            <Col>
                {wrapChildrenWith(this.props.children, this.props)}
            </Col>
        );
    }
}

export default KeyStrokeHandler;

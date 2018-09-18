import {wrapChildrenWith} from "../../utils/common";
import * as React from 'react';
import {getNextModeByKey} from "../../utils/mode";
import {Col} from "reactstrap";

interface IKeyStrokeHandlerProps {
    readonly data?: any;
    readonly actions?: any;
}

class KeyStrokeHandler extends React.Component<IKeyStrokeHandlerProps> {

    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyUp);
    }

    handleKeyUp = (event: any) => {
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

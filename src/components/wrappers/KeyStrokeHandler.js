import {wrapChildrenWith} from "../../utils/common";
import React from 'react';
import {getNextModeByKey} from "../../utils/mode";

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
        return <div>{wrapChildrenWith(this.props.children, this.props)}</div>;
    }
}

export default KeyStrokeHandler;

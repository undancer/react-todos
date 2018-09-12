import React from "react";
import {KEY_RETURN} from "keycode-js";

class InputBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    clear() {
        this.setState({value: ''});
    }

    handleKeyUp = (event) => {
        const {addNew} = this.props;
        const text = this.state.value.trim();
        if (event.keyCode === KEY_RETURN) {
            addNew(text);
            this.clear();
        }
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <input
                type="text"
                className="form-control add-todo"
                value={this.state.value}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                placeholder="Add New"
            />
        );
    }
}

export default InputBox;

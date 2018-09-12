import React from "react";
import {KEY_RETURN} from "keycode-js";

class InputBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    handleKeyUp = (event) => {
        if (event.keyCode === KEY_RETURN) {
            // Add new Todo Here
            // Clear the text box
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

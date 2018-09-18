import * as React from "react";
import {KEY_RETURN} from "keycode-js";

interface IInputBoxProps {
    readonly value?: string;
    readonly addNew: any;
}

interface IInputBoxState {
    value: string;
}

class InputBox extends React.Component<IInputBoxProps, IInputBoxState> {

    constructor(props: IInputBoxProps) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    clear() {
        this.setState({value: ''});
    }

    handleKeyUp = (event: any) => {
        const {addNew} = this.props;
        const text = this.state.value.trim();
        if (event.keyCode === KEY_RETURN) {
            addNew(text);
            this.clear();
        }
    };

    handleChange = (event: any) => {
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
                autoFocus
            />
        );
    }
}

export default InputBox;
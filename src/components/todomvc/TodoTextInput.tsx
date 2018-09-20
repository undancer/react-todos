import * as React from "react";
import {ChangeEvent, KeyboardEvent} from "react";
import {Dispatch} from "redux";
import {KEY_RETURN} from "keycode-js";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addNew: (value: string) => {
        dispatch({type: 'ADD_NEW_TODO', value})
    }
});

interface ITodoTextInputProps {
    value?: string;
    addNew: (value: string) => void;
}

interface ITodoTextInputState {
    value: string;
}

class TodoTextInput extends React.Component<ITodoTextInputProps, ITodoTextInputState> {

    constructor(props: ITodoTextInputProps) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        this.setState({value});
    };

    handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === KEY_RETURN) {
            const {value} = this.state;
            const {addNew} = this.props;
            addNew(value);
            this.setState({value: ''})
        }
    };


    render() {
        const {value} = this.state;
        return (
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                value={value}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTextInput);

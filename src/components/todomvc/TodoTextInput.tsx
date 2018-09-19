import * as React from "react";
import {ChangeEvent, KeyboardEvent} from "react";
import {Dispatch} from "redux";
import {KEY_RETURN} from "keycode-js";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addNew: (value: string) => {
        console.log("mapDispatchToProps - addNew");
        console.log(value);
        dispatch({type: 'ADD_NEW_TODO', value})
    }
});

interface ITodoTextInputProps {
    addNew: (value: string) => void;
}

interface ITodoTextInputState {
    value: string;
}

class TodoTextInput extends React.Component<ITodoTextInputProps, ITodoTextInputState> {

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        this.setState({value});
    };

    handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === KEY_RETURN) {
            console.log("handleKeyUp");
            const {value} = this.state;
            const {addNew} = this.props;
            addNew(value);
            this.setState({value: ''})
        }
    };


    render() {
        return (
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTextInput);

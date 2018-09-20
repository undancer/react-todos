import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Input from "./Input";
import {newTodo} from "../actions";

const mapStateToProps = (state: {}) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addNew: (value: string) => dispatch(newTodo(value)),
});

interface ITodoTextInputProps {
    addNew: (value: string) => void;
}

class TodoTextInput extends React.Component<ITodoTextInputProps> {

    handleReturn = (value: string) => {
        const {addNew} = this.props;
        addNew(value);
    };

    render() {
        return (
            <Input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onReturn={this.handleReturn}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTextInput);

import * as React from "react";
import {ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent} from "react";
import classNames from "classnames";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {KEY_ESCAPE, KEY_RETURN} from "keycode-js";


const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeStatus: (id: number, completed: boolean) => {
        dispatch({type: 'CHANGE_STATUS', id, completed})
    },

    onEdit: (id: number) => {
        dispatch({type: 'EDIT', id})

    },

    onSave: (id: number, text: string) => {
        dispatch({type: 'CHANGE_TODO', id, text})
    },

    onCancel: (id: number) => {
        dispatch({type: 'CANCEL', id})
    },

    onDestroy: (id: number) => {
        dispatch({type: 'DESTROY', id})
    }
});


interface ITodoItemProps {
    id: number;
    value: string;
    completed: boolean;
    changeStatus: (id: number, completed: boolean) => void;
    editing: boolean,
    onEdit: (id: number) => void;
    onSave: (id: number, text: string) => void;
    onCancel: (id: number) => void;
    onDestroy: (id: number) => void;
}

interface ITodoItemState {
    value: string;
}

class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {

    constructor(props: ITodoItemProps) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
        const {id, completed, changeStatus} = this.props;
        changeStatus(id, !completed);
    };

    handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        const value = this.state.value;
        const {id, onSave, onDestroy} = this.props;
        if (value) {
            onSave(id, value);
        } else {
            onDestroy(id);
        }
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        this.setState({value});
    };

    handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        switch (event.keyCode) {
            case KEY_RETURN: {
                const {value} = this.state;
                const {id, onSave} = this.props;
                onSave(id, value);
            }
                break;
            case KEY_ESCAPE: {
                const {id, value, onCancel} = this.props;
                this.setState({value});
                onCancel(id);
            }
                break;
            default:
                break;
        }
    };

    handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const {id, onDestroy} = this.props;
        onDestroy(id);
    };
    handleDoubleClick = (event: MouseEvent<HTMLLabelElement>) => {
        const {id, onEdit} = this.props;
        onEdit(id);
    };

    render() {
        const {editing, value, completed} = this.props;
        return (
            <li className={classNames({completed, editing})}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={completed}
                           onChange={this.handleToggle}
                    />
                    <label onDoubleClick={this.handleDoubleClick}>{value}</label>
                    <button className="destroy"
                            onClick={this.handleClick}
                    ></button>
                </div>
                <input className="edit" value={this.state.value}
                       onBlur={this.handleBlur}
                       onChange={this.handleChange}
                       onKeyUp={this.handleKeyUp}
                />
            </li>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

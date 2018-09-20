import * as React from "react";
import {MouseEvent} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {toggleAll} from "../actions";
import ITodo from "../models/ITodo";

const mapStateToProps = (state: { todos: { items: ITodo[] } }) => ({
    items: state.todos.items
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onToggleAll: (completed: boolean) => dispatch(toggleAll(completed)),
});

interface ITogglePanelProps {
    items: ITodo[],
    onToggleAll: (completed: boolean) => void,
}

class TogglePanel extends React.Component<ITogglePanelProps> {

    handleClick = (event: MouseEvent<HTMLLabelElement>) => {
        const {onToggleAll} = this.props;
        onToggleAll(!this.isAllCompleted());
    };

    isAllCompleted = () => {
        const {items} = this.props;
        const count = items.length;
        const completed = items.filter((item: ITodo) => item.completed).length;
        return count === completed;
    };

    render() {
        const {items} = this.props;
        const count = items.length;
        if (!count) {
            return null;
        }
        return (
            <span>
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    defaultChecked={this.isAllCompleted()}
                />
                <label
                    htmlFor="toggle-all"
                    onClick={this.handleClick}>
                    Mark all as complete
                </label>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TogglePanel);

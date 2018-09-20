import * as React from "react";
import {MouseEvent} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {toggleAll} from "../actions";

const mapStateToProps = (state: { todos: { items: [] } }) => ({
    items: state.todos.items
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onToggleAll: (completed: boolean) => dispatch(toggleAll(completed)),
});

interface ITogglePanelProps {
    items: [],
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
        const completed = items.filter((item: any) => item.completed).length;
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
                <input id="toggle-all" className="toggle-all" type="checkbox"
                       checked={this.isAllCompleted()}
                />
                <label htmlFor="toggle-all" onClick={this.handleClick}>Mark all as complete</label>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TogglePanel);

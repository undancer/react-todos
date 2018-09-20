import * as React from "react";
import {MouseEvent} from "react";
import Filter from "./Filter";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {clearCompleted} from "../actions";
import ITodo from "../models/ITodo";

const mapStateToProps = (state: { todos: { items: ITodo[] } }) => ({
    items: state.todos.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClearCompleted: () => dispatch(clearCompleted()),
});

interface IFooterProps {
    items: ITodo[],
    onClearCompleted: () => void;
}

class Footer extends React.Component<IFooterProps & RouteComponentProps> {

    handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const {onClearCompleted} = this.props;
        onClearCompleted();
    };

    render() {
        const {items} = this.props;
        const count = items.length;
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{count}</strong> item left</span>
                <Filter/>
                <button className="clear-completed"
                        onClick={this.handleClick}
                >
                    Clear completed
                </button>
            </footer>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));

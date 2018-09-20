import * as React from "react";
import {MouseEvent} from "react";
import Filter from "./Filter";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const mapStateToProps = (state: any) => ({
    items: state.todos.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onClearCompleted: () => {
        dispatch({type: 'CLEAR_COMPLETED'})
    }
});

interface IFooterProps {
    items: [],
    onClearCompleted: () => void;
}

class Footer extends React.Component<IFooterProps> {

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

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Footer));

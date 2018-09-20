import * as React from "react";
import Filter from "./Filter";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const mapStateToProps = (state: any) => ({
    items: state.todos.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

interface IFooterProps {
    items: [],
}

class Footer extends React.Component<IFooterProps> {
    render() {
        const {items} = this.props;
        const count = items.length;
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{count}</strong> item left</span>
                <Filter/>
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Footer));

import * as React from "react";
import {MouseEvent} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import FilteredList from "./FilteredList";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: { todos: { items: [] } }) => ({
    items: state.todos.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onToggleAll: () => dispatch({type: 'TOGGLE_ALL'})
});

interface ITodoAppProps {
    onToggleAll: () => void,
    items: [],
}

class TodoApp extends React.Component<ITodoAppProps & RouteComponentProps> {

    handleClick = (event: MouseEvent<HTMLLabelElement>) => {
        console.log("handleClickLabel");
        const {onToggleAll} = this.props;
        console.log(event.target);
        onToggleAll();
    };

    render() {
        const {items} = this.props;
        const count = items.length;
        const completed = items.filter((item: any) => item.completed).length;
        return (
            <section className="todoapp">
                <Header/>
                <section className="main">
                    {
                        !!count &&
                        <span>
                            <input id="toggle-all" className="toggle-all" type="checkbox"
                                   checked={count === completed}
                            />
                            <label htmlFor="toggle-all" onClick={this.handleClick}>Mark all as complete</label>
                        </span>
                    }
                    <Switch>
                        <Route exact path="/">
                            <FilteredList filter="all"/>
                        </Route>
                        <Route path="/active">
                            <FilteredList filter="active"/>
                        </Route>
                        <Route path="/completed">
                            <FilteredList filter="completed"/>
                        </Route>
                    </Switch>
                </section>
                <Footer/>
            </section>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoApp));

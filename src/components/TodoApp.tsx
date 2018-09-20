import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import FilteredList from "./FilteredList";
import TogglePanel from "./TogglePanel";

class TodoApp extends React.Component<RouteComponentProps> {
    render() {
        return (
            <section className="todoapp">
                <Header/>
                <section className="main">
                    <TogglePanel/>
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

export default withRouter(TodoApp);

import * as React from "react";
import {Route, Switch} from "react-router";
import InputBoxContainer from "../../containers/InputBoxContainer";
import SearchBoxContainer from "../../containers/SearchBoxContainer";

interface IHeaderProps {
    readonly title: string;
}

class Header extends React.Component<IHeaderProps> {

    render() {
        const {title} = this.props;
        return (
            <header>
                <h1>{title}</h1>
                <Switch>
                    <Route exact path="/" component={InputBoxContainer}/>
                    <Route path="/search" component={SearchBoxContainer}/>
                </Switch>
            </header>
        );
    }

}

export default Header;

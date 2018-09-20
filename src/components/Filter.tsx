import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

class Filter extends React.Component {
    render() {
        return (
            <ul className="filters">
                <li>
                    <NavLink
                        exact
                        activeClassName="selected"
                        to="/"
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="selected"
                        to="/active"
                    >
                        Active
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="selected"
                        to="/completed">
                        Completed
                    </NavLink>
                </li>
            </ul>
        );
    }
}

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Filter));

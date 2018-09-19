import * as React from "react";
import FilterContainer from "../../containers/FilterContainer";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IFooterProps {
    readonly count: number;
}

class Footer extends React.Component<IFooterProps> {

    render() {
        const {count} = this.props;
        return (
            <footer className="clearfix">
                <div className="float-left buttons">
                    <Link
                        to="/"
                        className="button"
                    >
                        <FontAwesomeIcon icon="plus"/>
                    </Link>
                    <NavLink
                        to="/search"
                        className="button"
                    >
                        <FontAwesomeIcon icon="search"/>
                    </NavLink>
                </div>
                <div className="float-left">
                    {`${count} items left`}
                </div>
                <div className="float-right">
                    <FilterContainer/>
                </div>
            </footer>
        );
    }

}

export default Footer;

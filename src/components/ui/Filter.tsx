import * as React from 'react';
import {getOptions} from "../../utils/fitler";
import {Nav, NavItem, NavLink} from "reactstrap";

interface IFilterProps {
    readonly filter: string;
    readonly changeFilter: any;
}

class Filter extends React.Component<IFilterProps> {

    render() {
        const {filter, changeFilter} = this.props;
        const getClass = (key: string) => (key === filter ? 'selected' : '');
        const options = getOptions();

        return (
            <Nav className="filters list-unstyled clearfix">
                {
                    Object.keys(options).map((key: string) =>
                        (
                            <NavItem key={key}>
                                <NavLink
                                    className={getClass(key)}
                                    onClick={() => changeFilter(key)}
                                >
                                    {options[key]}
                                </NavLink>
                            </NavItem>
                        )
                    )
                }
            </Nav>
        );
    }

}

export default Filter;

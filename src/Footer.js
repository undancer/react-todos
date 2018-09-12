import React from "react";
import Filter from "./Filter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = (props) => {
    const {count, filter, changeFilter} = props;
    return (
        <div className="todo-footer clearfix">
            <div className="float-left">
                <div className="pull-left buttons">
                    <a className="button add"> <FontAwesomeIcon icon="plus"/></a>
                    <a className="button search"><FontAwesomeIcon icon="search"/></a>
                </div>
                {`${count} items left`}
            </div>
            <div className="float-right">
                <Filter filter={filter} change={changeFilter}/>
            </div>
        </div>
    );
};
export default Footer;

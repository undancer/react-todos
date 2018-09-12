import React from "react";
import Filter from "./Filter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MODE_CREATE, MODE_SEARCH} from "./mode";

const Footer = (props) => {
    const {count, filter, changeFilter, mode} = props;
    return (
        <div className="todo-footer clearfix">
            <div className="float-left">
                <div className="pull-left buttons">
                    <a className={'button add ' + (mode === MODE_CREATE ? 'selected' : '')}>
                        <FontAwesomeIcon icon="plus"/>
                    </a>
                    <a className={'button search ' + (mode === MODE_SEARCH ? 'selected' : '')}>
                        <FontAwesomeIcon icon="search"/>
                    </a>
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

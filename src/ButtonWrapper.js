import {MODE_CREATE, MODE_SEARCH} from "./mode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonWrapper = (props) => {
    const {mode} = props;
    return (
        <div>
            <a className={'button add ' + (mode === MODE_CREATE ? 'selected' : '')}>
                <FontAwesomeIcon icon="plus"/>
            </a>
            <a className={'button search ' + (mode === MODE_SEARCH ? 'selected' : '')}>
                <FontAwesomeIcon icon="search"/>
            </a>
        </div>
    );
};
export default ButtonWrapper;

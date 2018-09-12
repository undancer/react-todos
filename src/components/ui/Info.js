import React from 'react';
import {MODE_NONE} from "../../utils/mode";

const Info = (props) => {
    const {mode} = props;

    const INFO_SHORTCUT_KEYS = 'Press `/` to search and `N` to create a new item.';
    const INFO_CANCEL_SHORTCUT_KEY = 'Press `Esc` to cancel.';
    const message = mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;
    return <p className="info">{message}</p>;
};
export default Info;

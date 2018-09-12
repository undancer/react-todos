import React from 'react';
import {MODE_NONE} from "../../utils/mode";
import {INFO_CANCEL_SHORTCUT_KEY, INFO_SHORTCUT_KEYS} from '../../config/lang/en_US';

const Info = (props) => {
    const {mode} = props;
    const message = mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;
    return <p className="info">{message}</p>;
};
export default Info;

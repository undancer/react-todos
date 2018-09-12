import React from 'react';
import {MODE_CREATE, MODE_SEARCH} from "../../utils/mode";
import InputBox from "../ui/InputBox";
import SearchBox from "../ui/SearchBox";

const InputWrapper = (props) => {
    const {mode, addNew, query, setSearchQuery} = props;
    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{addNew}}/>;
        case MODE_SEARCH:
            return <SearchBox {...{query, setSearchQuery}}/>;
        default:
            return null;
    }
}
export default InputWrapper;

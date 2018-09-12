import React from 'react';
import {MODE_CREATE, MODE_SEARCH} from "./mode";
import InputBox from "./InputBox";
import SearchBox from "./SearchBox";

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

import * as React from 'react';
import {MODE_CREATE, MODE_SEARCH} from "../../utils/mode";
import InputBox from "../ui/InputBox";
import SearchBox from "../ui/SearchBox";

interface IInputWrapperProps {
    readonly mode: string;
    readonly addNew: any;
    readonly query: string;
    readonly setSearchQuery: any;
}

class InputWrapper extends React.Component<IInputWrapperProps> {
    render() {
        const {mode, addNew, query, setSearchQuery} = this.props;
        switch (mode) {
            case MODE_CREATE:
                return <InputBox {...{addNew}}/>;
            case MODE_SEARCH:
                return <SearchBox {...{query, setSearchQuery}}/>;
            default:
                return null;
        }
    }
}

export default InputWrapper;

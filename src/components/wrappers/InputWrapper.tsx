import * as React from 'react';
import {MODE_CREATE, MODE_SEARCH} from "../../utils/mode";
import InputBox from "../ui/InputBox";
import SearchBoxContainer from "../../containers/SearchBoxContainer";

interface IInputWrapperProps {
    readonly mode: string;
    readonly addNew: any;
}

class InputWrapper extends React.Component<IInputWrapperProps> {
    render() {
        const {mode, addNew} = this.props;
        switch (mode) {
            case MODE_CREATE:
                return <InputBox {...{addNew}}/>;
            case MODE_SEARCH:
                return <SearchBoxContainer/>;
            default:
                return null;
        }
    }
}

export default InputWrapper;

import * as React from 'react';
import {MODE_CREATE, MODE_SEARCH} from "../../utils/mode";
import SearchBoxContainer from "../../containers/SearchBoxContainer";
import InputBoxContainer from "../../containers/InputBoxContainer";

interface IInputWrapperProps {
    readonly mode: string;
}

class InputWrapper extends React.Component<IInputWrapperProps> {
    render() {
        const {mode} = this.props;
        switch (mode) {
            case MODE_CREATE:
                return <InputBoxContainer/>;
            case MODE_SEARCH:
                return <SearchBoxContainer/>;
            default:
                return null;
        }
    }
}

export default InputWrapper;

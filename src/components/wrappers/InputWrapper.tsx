import * as React from 'react';
import {MODE_CREATE, MODE_SEARCH} from "../../utils/mode";
import SearchBoxContainer from "../../containers/SearchBoxContainer";
import InputBoxContainer from "../../containers/InputBoxContainer";
import {BrowserRouter as Router, Route} from "react-router-dom";

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
                return (
                    <Router>
                        <Route exact path="/" component={InputBoxContainer}/>
                        <Route path="/search" component={SearchBoxContainer}/>
                    </Router>
                );
        }
    }
}

export default InputWrapper;

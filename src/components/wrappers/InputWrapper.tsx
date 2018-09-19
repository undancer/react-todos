import * as React from 'react';
import SearchBoxContainer from "../../containers/SearchBoxContainer";
import InputBoxContainer from "../../containers/InputBoxContainer";
import {Route} from "react-router-dom";

interface IInputWrapperProps {
    readonly mode: string;
}

class InputWrapper extends React.Component<IInputWrapperProps> {
    render() {
        // const {mode} = this.props;
        // switch (mode) {
        //     case MODE_CREATE:
        //         return <InputBoxContainer/>;
        //     case MODE_SEARCH:
        //         return <SearchBoxContainer/>;
        //     default:
        //         return null;
        // }

        return (
            <div>
                <Route exact path="/"/>
                <Route path="/new" component={InputBoxContainer}/>
                <Route path="/search" component={SearchBoxContainer}/>
            </div>
        )
    }
}

export default InputWrapper;

import {MODE_CREATE, MODE_NONE, MODE_SEARCH} from "../../utils/mode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";

interface IButtonWrapperProps {
    readonly mode: string;
    readonly changeMode: any;
}

class ButtonWrapper extends React.Component<IButtonWrapperProps> {

    render() {
        const {mode, changeMode} = this.props;
        const isCreateMode = () => mode === MODE_CREATE;
        const isSearchMode = () => mode === MODE_SEARCH;
        return (
            <div>
                <a
                    className={'button add ' + (isCreateMode() ? 'selected' : '')}
                    onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}
                >
                    <FontAwesomeIcon icon="plus"/>
                </a>
                <a
                    className={'button search ' + (isSearchMode() ? 'selected' : '')}
                    onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}
                >
                    <FontAwesomeIcon icon="search"/>
                </a>
            </div>
        );
    }
    
}

export default ButtonWrapper;

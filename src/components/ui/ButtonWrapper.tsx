import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";
import {Link} from "react-router-dom";
import {MODE_CREATE, MODE_NONE, MODE_SEARCH} from "../../utils/mode";

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
                <Link
                    to="/new"
                    className={'button add ' + (isCreateMode() ? 'selected' : '')}
                    onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}
                >
                    <FontAwesomeIcon icon="plus"/>
                </Link>
                <Link
                    to="/search"
                    className={'button search ' + (isSearchMode() ? 'selected' : '')}
                    onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}
                >
                    <FontAwesomeIcon icon="search"/>
                </Link>
            </div>
        );
    }

}

export default ButtonWrapper;

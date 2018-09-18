import * as React from 'react';
import {MODE_NONE} from '../../utils/mode';
import {INFO_CANCEL_SHORTCUT_KEY, INFO_SHORTCUT_KEYS} from '../../config/lang/en_US';

interface IInfoProps {
    readonly mode: string
}

class Info extends React.Component<IInfoProps> {

    render() {
        const {mode} = this.props;
        const message = mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;
        return (
            <p className="info">{message}</p>
        )
    }
    
}

export default Info;

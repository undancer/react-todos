import * as React from "react";
import {ChangeEvent, InputHTMLAttributes, KeyboardEvent} from "react";
import {KEY_RETURN} from "keycode-js";

interface IInputProps {
    value?: string
    onReturn?: (value: string) => void;
}

interface IInputState {
    value: string
}

class Input extends React.Component<IInputProps & InputHTMLAttributes<HTMLInputElement>, IInputState> {

    constructor(props: IInputProps) {
        super(props);
        this.state = {
            value: props.value || ''
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        this.setState({value});
    };

    handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        const {onReturn} = this.props;
        const {value} = this.state;
        switch (event.keyCode) {
            case KEY_RETURN: {
                if (onReturn) {
                    onReturn(value);
                    this.setState({value: ''})
                }
            }
                break;
            default:
                break;
        }
    };

    render() {
        const {value} = this.state;
        const {className, placeholder, autoFocus} = this.props;
        return (
            <input
                value={value}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                {...{className, placeholder, autoFocus}}
            />
        )
    }
}

export default Input;

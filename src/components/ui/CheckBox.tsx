import * as React from 'react';
import {ChangeEvent} from 'react';

interface ICheckBoxProps {
    readonly checked: boolean;
    readonly onChange: (checked: boolean) => {};
}

interface ICheckBoxState {
    checked: boolean;
}

class CheckBox extends React.Component<ICheckBoxProps, ICheckBoxState> {

    constructor(props: ICheckBoxProps) {
        super(props);
        this.state = {
            checked: props.checked
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {checked} = event.target;
        this.setState({checked});
        this.props.onChange(checked);
    };

    render() {
        return (
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChange}
            />
        );

    }
}

export default CheckBox;

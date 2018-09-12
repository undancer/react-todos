import React from 'react';

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked
        };
    }

    handleChange = (event) => {
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

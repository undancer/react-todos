import React from 'react';

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked
        };
    }

    render() {
        return (
            <input type="checkbox" checked={this.state.checked}/>
        );

    }
}

export default CheckBox;

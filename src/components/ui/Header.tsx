import * as React from "react";
import InputWrapper from "../wrappers/InputWrapper";

interface IHeaderProps {
    readonly title: string;
}

class Header extends React.Component<IHeaderProps> {

    render() {
        const {title} = this.props;
        return (
            <header>
                <h1>{title}</h1>
                <InputWrapper {...this.props}/>
            </header>
        );
    }
    
}

export default Header;

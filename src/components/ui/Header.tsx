import * as React from "react";
import InputWrapperContainer from "../../containers/InputWrapperContainer";

interface IHeaderProps {
    readonly title: string;
}

class Header extends React.Component<IHeaderProps> {

    render() {
        const {title} = this.props;
        return (
            <header>
                <h1>{title}</h1>
                <InputWrapperContainer/>
            </header>
        );
    }

}

export default Header;

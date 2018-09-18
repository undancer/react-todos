import * as React from "react";
import InputWrapperContainer from "../../containers/InputWrapperContainer";

interface IHeaderProps {
    readonly title: string;
    readonly addNew: any;
}

class Header extends React.Component<IHeaderProps> {

    render() {
        const {title} = this.props;
        const {addNew} = this.props;
        return (
            <header>
                <h1>{title}</h1>
                <InputWrapperContainer {...{addNew}} />
            </header>
        );
    }

}

export default Header;

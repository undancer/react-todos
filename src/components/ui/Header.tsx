import * as React from "react";
import InputWrapperContainer from "../../containers/InputWrapperContainer";

interface IHeaderProps {
    readonly title: string;
    readonly addNew: any;
    readonly query: string;
    readonly setSearchQuery: any;
}

class Header extends React.Component<IHeaderProps> {

    render() {
        const {title} = this.props;
        const {addNew, query, setSearchQuery} = this.props;
        return (
            <header>
                <h1>{title}</h1>
                <InputWrapperContainer {...{addNew, query, setSearchQuery}} />
            </header>
        );
    }

}

export default Header;

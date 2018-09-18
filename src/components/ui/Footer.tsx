import * as React from "react";
import ButtonWrapperContainer from "../../containers/ButtonWrapperContainer";
import FilterContainer from "../../containers/FilterContainer";

interface IFooterProps {
    readonly count: number;
}

class Footer extends React.Component<IFooterProps> {

    render() {
        const {count} = this.props;
        return (
            <footer className="clearfix">
                <div className="float-left buttons">
                    <ButtonWrapperContainer/>
                </div>
                <div className="float-left">
                    {`${count} items left`}
                </div>
                <div className="float-right">
                    <FilterContainer/>
                </div>
            </footer>
        );
    }

}

export default Footer;

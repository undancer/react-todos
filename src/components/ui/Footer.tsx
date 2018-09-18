import * as React from "react";
import Filter from "./Filter";
import ButtonWrapperContainer from "../../containers/ButtonWrapperContainer";

interface IFooterProps {
    readonly count: number;
    readonly filter: string;
    readonly changeFilter: any;
    readonly mode: string;
    readonly changeMode: any;
}

class Footer extends React.Component<IFooterProps> {

    render() {
        const {count, filter, changeFilter} = this.props;
        return (
            <footer className="clearfix">
                <div className="float-left buttons">
                    <ButtonWrapperContainer/>
                </div>
                <div className="float-left">
                    {`${count} items left`}
                </div>
                <div className="float-right">
                    <Filter
                        {...{filter, changeFilter}}
                    />
                </div>
            </footer>
        );
    }

}

export default Footer;

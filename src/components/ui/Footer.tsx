import * as React from "react";
import Filter from "./Filter";
import ButtonWrapper from "./ButtonWrapper";

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
        const {mode, changeMode} = this.props;
        return (
            <footer className="clearfix">
                <div className="float-left buttons">
                    <ButtonWrapper {...{mode, changeMode}}/>
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

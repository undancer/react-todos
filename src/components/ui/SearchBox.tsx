import * as React from "react";
import {ChangeEvent} from "react";

interface ISearchBoxProps {
    readonly query: string;
    readonly setSearchQuery: any;
}

class SearchBox extends React.Component<ISearchBoxProps> {

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {setSearchQuery} = this.props;
        const {value} = e.target;
        setSearchQuery(value)
    };

    render() {
        const {query} = this.props;
        return (
            <input
                type="text"
                className="form-control search"
                value={query}
                onChange={this.handleChange}
                placeholder="Search"
                autoFocus
            />
        );
    }

}

export default SearchBox;

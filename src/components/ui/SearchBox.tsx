import * as React from "react";

interface ISearchBoxProps {

    readonly query: string;
    readonly setSearchQuery: any;

}

class SearchBox extends React.Component<ISearchBoxProps> {

    render() {
        const {query, setSearchQuery} = this.props;
        return (
            <input
                type="text"
                className="form-control search"
                value={query}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search"
                autoFocus
            />
        );
    }
    
}

export default SearchBox;

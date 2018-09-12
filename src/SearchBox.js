import React from "react";

const SearchBox = (props) => {
    const {query, search} = props;
    return (
        <input
            type="text"
            className="form-control search"
            value={query}
            onChange={e => search(e.target.value)}
            placeholder="Search"
        />
    );
};
export default SearchBox;

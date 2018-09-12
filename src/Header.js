import React from "react";

const Header = (props) => {
    const {title} = props;
    return (
        <h1>{title.toUpperCase()}</h1>

    );
};
export default Header;

import React from "react";
import InputBox from "./InputBox";

const Header = (props) => {
    const {title} = props;
    return (
        <header>
            <h1>{title.toUpperCase()}</h1>
            <InputBox/>
        </header>
    );
};
export default Header;

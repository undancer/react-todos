import React from "react";
import InputWrapper from "./InputWrapper";

const Header = (props) => {
    const {title} = props;
    return (
        <header>
            <h1>{title}</h1>
            <InputWrapper {...props}/>
        </header>
    );
};
export default Header;

import React from "react";
import InputBox from "./InputBox";

const Header = (props) => {
    const {title, addNew} = props;
    return (
        <header>
            <h1>{title}</h1>
            <InputBox
                addNew={addNew}
            />
        </header>
    );
};
export default Header;

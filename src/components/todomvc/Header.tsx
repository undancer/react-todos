import * as React from "react";
import TodoTextInput from "./TodoTextInput";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput/>
            </header>
        )
    }
}

export default Header;

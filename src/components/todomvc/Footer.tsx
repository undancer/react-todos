import * as React from "react";
import Filter from "./Filter";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>0</strong> item left</span>
                <Filter/>
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}

export default Footer;

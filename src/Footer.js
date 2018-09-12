import React from "react";

const Footer = (props) => {
    return (
        <div className="todo-footer">
            <strong>
                <span className="count-todos">0</span>
            </strong>
            {' items left'}
        </div>
    );
};
export default Footer;

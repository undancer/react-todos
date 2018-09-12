import React from "react";
import Filter from "./Filter";

const Footer = (props) => {
    const {count} = props;
    return (
        <div className="todo-footer clearfix">
            <div className="float-left">
                <strong>
                    <span className="count-todos">{count}</span>
                </strong>
                {' items left'}
            </div>
            <div className="float-right">
                <Filter/>
            </div>
        </div>
    );
};
export default Footer;

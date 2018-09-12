import React from "react";
import Filter from "./Filter";
import ButtonWrapper from "./ButtonWrapper";

const Footer = (props) => {
    const {count, filter, changeFilter, mode} = props;
    return (
        <div className="todo-footer clearfix">
            <div className="float-left buttons">
                <ButtonWrapper {...props}/>
            </div>
            <div className="float-left">
                {`${count} items left`}
            </div>
            <div className="float-right">
                <Filter filter={filter} change={changeFilter}/>
            </div>
        </div>
    );
};
export default Footer;

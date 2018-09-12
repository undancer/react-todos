import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter} from "./filter/fitler";
import FilteredList from "./FilteredList";

const TodoList = (props) => {
    const {title} = props;
    const {items, filter, mode, query} = props.data;
    const {addNew, changeFilter, changeStatus, changeMode, search} = props.actions;
    const count = items.length;
    const filteredItems = applyFilter(items, filter);
    return (
        <div className="todolist">
            <Header
                title={title}
                {...{addNew, mode, query, search}}
            />
            <FilteredList items={filteredItems} changeStatus={changeStatus}/>
            <Footer
                {...{count, filter, mode, changeFilter, changeMode}}
            />
        </div>
    );
};

export default TodoList;

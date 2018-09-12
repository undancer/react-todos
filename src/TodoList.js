import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter, search} from "./filter/fitler";
import FilteredList from "./FilteredList";

const TodoList = (props) => {
    const {title} = props;
    const {items, filter, mode, query} = props.data;
    const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery} = props.actions;
    const count = items.length;
    const filteredItems = search(applyFilter(items, filter), query);
    return (
        <div className="todolist">
            <Header
                title={title}
                {...{addNew, mode, query, setSearchQuery}}
            />
            <FilteredList items={filteredItems} changeStatus={changeStatus}/>
            <Footer
                {...{count, filter, mode, changeFilter, changeMode}}
            />
        </div>
    );
};

export default TodoList;

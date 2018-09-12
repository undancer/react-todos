import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter} from "./filter/fitler";
import FilteredList from "./FilteredList";

const TodoList = (props) => {
    const {title} = props;
    const {items, filter} = props.data;
    const {addNew, changeFilter, changeStatus} = props.actions;
    const count = items.length;
    const filteredItems = applyFilter(items, filter);
    return (
        <div className="todolist">
            <Header
                title={title}
                addNew={addNew}
            />
            <FilteredList items={filteredItems} changeStatus={changeStatus}/>
            <Footer count={count} filter={filter} changeFilter={changeFilter}/>
        </div>
    );
};

export default TodoList;

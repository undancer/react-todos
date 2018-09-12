import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Footer from "./Footer";

const TodoList = (props) => {
    const {title, items, addNew, changeFilter, filter} = props;
    const count = items.length;
    const filteredList = applyFilter(items, filter);
    return (
        <div className="todolist">
            <Header
                title={title}
                addNew={addNew}
            />
            <ul className="list-unstyled">
                {
                    filteredList.map((item) => (
                        <TodoItem item={item}/>
                    ))
                }
            </ul>
            <Footer count={count} filter={filter} changeFilter={changeFilter}/>
        </div>
    );
};

const applyFilter = (list, filter) => {
    switch (filter) {
        case 'completed':
            return list.filter(item => item.completed === true);
        case 'active':
            return list.filter(item => item.completed === false);
        default:
            return list;
    }
};

export default TodoList;

import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter} from "./filter/fitler";

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
            {
                filteredList.length > 0 ?
                    (
                        <ul className="list-unstyled">
                            {
                                filteredList.map((item) => (
                                    <TodoItem item={item}/>
                                ))
                            }
                        </ul>
                    ) : (
                        <p className="alert alert-info">There are no items.</p>
                    )
            }

            <Footer count={count} filter={filter} changeFilter={changeFilter}/>
        </div>
    );
};

export default TodoList;

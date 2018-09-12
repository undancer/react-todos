import TodoItem from "./TodoItem";
import React from "react";

const FilteredList = (props) => {

    const {items, changeStatus} = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">There are no items.</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {
                items.map((item) => (
                    <TodoItem
                        id={item.id}
                        data={item.text}
                        completed={item.completed}
                        changeStatus={changeStatus}
                    />
                ))
            }
        </ul>
    );
};
export default FilteredList;

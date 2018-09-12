import TodoItem from "./TodoItem";
import React from "react";
import {MSG_NO_ITEMS} from "../../config/lang/en_US";

const FilteredList = (props) => {

    const {items, changeStatus} = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {
                items.map((item) => (
                    <TodoItem
                        key={item.id}
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

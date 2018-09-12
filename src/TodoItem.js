import React from "react";

const TodoItem = (props) => {
    const {item} = props;
    return (
        <li key={item.id} className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value="" checked={item.completed}/>{item.text}
                </label>
            </div>
        </li>
    );
};
export default TodoItem;

import React from "react";
import CheckBox from "./CheckBox";

const TodoItem = (props) => {
    const {id, data, completed, changeStatus} = props;
    const handleChange = (checked) => changeStatus(id, checked);
    return (
        <li key={id} className="ui-state-default">
            <div className="checkbox">
                <label>
                    <CheckBox checked={completed} onChange={handleChange}/>{data}
                </label>
            </div>
        </li>
    );
};
export default TodoItem;

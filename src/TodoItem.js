import React from "react";
import CheckBox from "./CheckBox";

const TodoItem = (props) => {
    const {id, data, completed} = props;
    return (
        <li key={id} className="ui-state-default">
            <div className="checkbox">
                <label>
                    <CheckBox checked={completed}/>{data}
                </label>
            </div>
        </li>
    );
};
export default TodoItem;

import * as React from "react";
import CheckBox from "./CheckBox";

interface ITodoItemProps {
    readonly id: string;
    readonly data: string;
    readonly completed: boolean;
    readonly changeStatus: any;
}

class TodoItem extends React.Component<ITodoItemProps> {

    render() {
        const {id, data, completed, changeStatus} = this.props;
        const handleChange = (checked: any) => changeStatus(id, checked);
        const className = 'todo-item ui-state-default ' + (completed === true ? 'completed' : 'pending');
        // @ts-ignore
        return (
            <li key={id} className={className}>
                <div className="checkbox">
                    <label>
                        <CheckBox checked={completed} onChange={handleChange}/>{data}
                    </label>
                </div>
            </li>
        );
    }

}

export default TodoItem;

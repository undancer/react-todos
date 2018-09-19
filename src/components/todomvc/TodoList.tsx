import * as React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <ul className="todo-list">
                {this.props.children}
            </ul>
        )
    }
}

export default TodoList;

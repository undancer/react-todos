import * as React from "react";
import TodoItem from "./TodoItem";
import {connect} from "react-redux";

const mapStateToProps = (state: { todos: { editing: number } }) => ({
    editing: state.todos.editing,
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({});

interface ITodoListProps {
    editing: number,
    list: [],
}

class TodoList extends React.Component<ITodoListProps> {
    render() {
        const {list, editing} = this.props;
        return (
            <ul className="todo-list">
                {
                    list.map((item: { id: number, text: string, completed: boolean }) => (
                        <TodoItem key={item.id}
                                  id={item.id}
                                  value={item.text}
                                  editing={editing === item.id}
                                  completed={item.completed}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default connect(mapStateToProps)(TodoList);

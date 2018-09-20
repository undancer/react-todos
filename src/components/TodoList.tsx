import * as React from "react";
import TodoItem from "./TodoItem";
import {connect} from "react-redux";
import ITodo from "../models/ITodo";

const mapStateToProps = (state: { todos: { editing: number } }) => ({
    editing: state.todos.editing,
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({});

interface ITodoListProps {
    editing: number,
    list: ITodo[],
}

class TodoList extends React.Component<ITodoListProps> {
    render() {
        const {list, editing} = this.props;
        return (
            <ul className="todo-list">
                {
                    list.map((item: ITodo) => (
                        <TodoItem key={item.id}
                                  id={item.id}
                                  title={item.title}
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

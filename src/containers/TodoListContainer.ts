import {connect} from "react-redux";
import TodoList from "../components/ui/TodoList";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state: any) => ({
    filter: state.todos.filter,
    query: state.todos.query,
    items: state.todos.items,
});

const TodoListContainer = withRouter<any>(connect(mapStateToProps)(TodoList));

export default TodoListContainer;

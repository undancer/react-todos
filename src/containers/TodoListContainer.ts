import {connect} from "react-redux";
import {Dispatch} from "redux";
import TodoList from "../components/ui/TodoList";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state: any) => ({
    filter: state.todos.filter,
    query: state.todos.query,
    items: state.todos.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const TodoListContainer = withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(TodoList));

export default TodoListContainer;

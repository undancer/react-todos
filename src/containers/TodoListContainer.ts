import {connect} from "react-redux";
import {Dispatch} from "redux";
import TodoList from "../components/ui/TodoList";

const mapStateToProps = (state: any) => ({
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
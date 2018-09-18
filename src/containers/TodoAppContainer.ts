import {connect} from "react-redux";
import TodoApp from "../components/wrappers/TodoApp";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => ({
    mode: state.todos.mode
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeMode: (mode: string) => dispatch({type: 'CHANGE_MODE', mode: mode})
});

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;

import {connect} from "react-redux";
import InputWrapper from "../components/wrappers/InputWrapper";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => ({
    mode: state.todos.mode
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const InputWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(InputWrapper);
export default InputWrapperContainer;

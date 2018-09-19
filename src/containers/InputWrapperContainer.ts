import {connect} from "react-redux";
import InputWrapper from "../components/wrappers/InputWrapper";
import {Dispatch} from "redux";
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state: any) => ({
    mode: state.todos.mode
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const InputWrapperContainer = withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(InputWrapper));
export default InputWrapperContainer;

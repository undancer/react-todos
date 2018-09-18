import {connect} from "react-redux";
import InputBox from "../components/ui/InputBox";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addNew: (value: string) => {
        dispatch({type: 'ADD_NEW_TODO', value: value})
    }
});

const InputBoxContainer = connect(mapStateToProps, mapDispatchToProps)(InputBox);

export default InputBoxContainer;

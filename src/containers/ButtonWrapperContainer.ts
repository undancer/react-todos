import {connect} from "react-redux";
import ButtonWrapper from "../components/ui/ButtonWrapper";
import {Dispatch} from "redux";
import {MODE_NONE} from "../utils/mode";


const mapStateToProps = (state: any = {}, ownProps: any) => {
    return ({
        mode: state.todos.mode
    });
};

const mapDispatchToProps = (dispatch: Dispatch) => ({

    changeMode: (mode: string = MODE_NONE) => {
        console.log("CHANGE_MODE BEFORE");
        dispatch({type: 'CHANGE_MODE', mode});
        console.log("CHANGE_MODE AFTER");
    }

});

const ButtonWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonWrapper);

export default ButtonWrapperContainer;

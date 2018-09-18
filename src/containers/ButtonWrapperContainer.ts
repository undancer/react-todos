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
        dispatch({type: 'CHANGE_MODE', mode});
    }

});

const ButtonWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonWrapper);

export default ButtonWrapperContainer;

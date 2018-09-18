import {connect} from "react-redux";
import FilteredList from "../components/ui/FilteredList";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
        changeStatus: (id: number, completed: boolean) => dispatch({
            type: 'CHANGE_STATUS',
            id,
            completed,
        })
    })
;

const FilteredListContainer = connect(mapStateToProps, mapDispatchToProps)(FilteredList);

export default FilteredListContainer;

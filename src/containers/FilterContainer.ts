import {connect} from "react-redux";
import Filter from "../components/ui/Filter";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => ({
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

    changeFilter: (filter: string) => {
        dispatch({type: 'CHANGE_FILTER', filter: filter})
    }

});

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;

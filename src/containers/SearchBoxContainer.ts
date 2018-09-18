import {connect} from "react-redux";
import SearchBox from "../components/ui/SearchBox";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => ({
    query: state.todos.query
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setSearchQuery: (query: string) => {
        dispatch({type: 'SET_SEARCH_QUERY', query: query})
    }
});

const SearchBoxContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBox);

export default SearchBoxContainer;

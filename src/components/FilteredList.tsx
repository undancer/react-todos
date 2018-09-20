import * as React from "react";
import {connect} from "react-redux";
import {applyFilter} from "../utils/fitler";
import TodoList from "./TodoList";
import ITodo from "../models/ITodo";

const mapStateToProps = (state: { todos: { items: ITodo[] } }) => ({
    items: state.todos.items,
});

interface IFilteredListProps {
    filter: string,
    items: ITodo[],
}

class FilteredList extends React.Component<IFilteredListProps> {

    render() {
        const {items, filter} = this.props;
        const filteredList = applyFilter(items, filter);
        return (
            <TodoList list={filteredList}/>
        )
    }

}

export default connect(mapStateToProps)(FilteredList);

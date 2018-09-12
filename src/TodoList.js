import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter, FILTER_ALL} from "./filter/fitler";
import {addToList, getAll, updateStatus} from "./todo/todo";
import FilteredList from "./FilteredList";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: FILTER_ALL,
            items: getAll()
        }
    }

    addNew = (text) => {
        let updatedList = addToList(this.state.items, {text, completed: false});
        this.setState({
            items: updatedList
        });
    };

    changeFilter = (filter) => {
        this.setState({filter});
    };

    changeStatus = (itemId, completed) => {
        const updatedList = updateStatus(this.state.items, itemId, completed);
        this.setState({items: updatedList});
    };

    render() {
        const {title} = this.props;
        const {filter, items} = this.state;
        const count = items.length;
        const filteredItems = applyFilter(items, filter);
        return (
            <div className="todolist">
                <Header
                    title={title}
                    addNew={this.addNew}
                />
                <FilteredList items={filteredItems} changeStatus={this.changeStatus}/>
                <Footer count={count} filter={filter} changeFilter={this.changeFilter}/>
            </div>
        );
    }
}

export default TodoList;

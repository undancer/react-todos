import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Footer from "./Footer";
import {applyFilter, FILTER_ACTIVE} from "./filter/fitler";
import {addToList, getAll} from "./todo/todo";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: FILTER_ACTIVE,
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

    render() {
        const {title} = this.props;
        const {filter, items} = this.state;
        const count = items.length;
        const filteredList = applyFilter(items, filter);
        return (
            <div className="todolist">
                <Header
                    title={title}
                    addNew={this.addNew}
                />
                {
                    filteredList.length > 0 ?
                        (
                            <ul className="list-unstyled">
                                {
                                    filteredList.map((item) => (
                                        <TodoItem
                                            id={item.id}
                                            data={item.text}
                                            completed={item.completed}
                                        />
                                    ))
                                }
                            </ul>
                        ) : (
                            <p className="alert alert-info">There are no items.</p>
                        )
                }

                <Footer count={count} filter={filter} changeFilter={this.changeFilter}/>
            </div>
        );
    }
}

export default TodoList;

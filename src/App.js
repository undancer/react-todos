import React from 'react';
import TodoList from "./TodoList";
import {FILTER_ACTIVE} from "./filter/fitler";
import {addToList, getAll} from "./todo/todo";

class App extends React.Component {

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
        let title = 'Things to do';
        return (
            <div className="container">
                <div className="row">
                    <TodoList
                        title={title}
                        addNew={this.addNew}
                        changeFilter={this.changeFilter}
                        {...this.state}
                    />
                </div>
            </div>
        );
    }
}

export default App;

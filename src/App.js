import React from 'react';
import TodoList from "./TodoList";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: 'active',
            items: [
                {
                    id: 1,
                    text: 'Learn Javascript',
                    completed: false
                },
                {
                    id: 2,
                    text: 'Learn React',
                    completed: false
                },
                {
                    id: 3,
                    text: 'Build a React App',
                    completed: true
                }
            ]
        }
    }

    addNew = (text) => {
        let item = {
            id: this.state.items.length + 1,
            text: text
        };
        let updatedList = this.state.items.concat([item]);
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

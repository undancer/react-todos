import React from 'react';
import TodoList from "./TodoList";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        let title = 'Things to do';
        return (
            <div className="container">
                <div className="row">
                    <TodoList title={title} items={this.state.items}/>
                </div>
            </div>
        );
    }
}

export default App;

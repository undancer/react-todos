import React from 'react';

const App = () => {
    let items = [
        {
            text: 'Learn Javascript',
            completed: false
        },
        {
            text: 'Learn React',
            completed: false
        },
        {
            text: 'Build a React App',
            completed: true
        }
    ];
    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <h1>Todos</h1>
                    <ul className="list-unstyled">
                        {
                            items.map((item) => (
                                    <li className="ui-state-default">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value="" checked={item.completed}/>{item.text}
                                            </label>
                                        </div>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;

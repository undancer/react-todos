import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/wrappers/App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css'
// import './config/bootstrap'
import './config/fortawesome'
import 'todomvc-app-css/index.css'
import {Provider} from "react-redux";
import store from "./stores";
import {BrowserRouter as Router} from "react-router-dom";
import TodoApp from "./components/todomvc/TodoApp";

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <div>
                    <div>
                        <TodoApp/>
                    </div>
                    <App/>
                </div>
            </Router>
        </Provider>
    ), document.getElementById('root'));
registerServiceWorker();

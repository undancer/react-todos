import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/wrappers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css'
import './config/bootstrap'
import './config/fortawesome'
import {Provider} from "react-redux";
import store from "./stores";

ReactDOM.render(
    (
        <Provider store={store}>
            <App/>
        </Provider>
    ), document.getElementById('root'));
registerServiceWorker();

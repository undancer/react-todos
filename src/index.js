import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import './index.css'
import './config/fortawesome'

ReactDOM.render(
    (
        <App/>
    ), document.getElementById('root'));
registerServiceWorker();

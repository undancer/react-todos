import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/wrappers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css'
import './config/bootstrap'
import './config/fortawesome'

ReactDOM.render(
    (
        <App/>
    ), document.getElementById('root'));
registerServiceWorker();

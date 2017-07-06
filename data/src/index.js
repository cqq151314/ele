import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyRouter from './Router'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MyRouter />, document.getElementById('root'));
registerServiceWorker();

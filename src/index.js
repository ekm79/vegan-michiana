import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Components/Root';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './Reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk, logger)) ;


ReactDOM.render(
    <Provider store={store}>
<Router>
    <App />
    </Router>
    </Provider>, document.getElementById('root'));


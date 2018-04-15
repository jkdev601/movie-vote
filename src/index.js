import React from 'react';
import ReactDOM from 'react-dom';
import handleActions from './store/handler/handler';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './style.css';

const store = createStore(handleActions, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

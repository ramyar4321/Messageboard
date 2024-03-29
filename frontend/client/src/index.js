import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import allReducers from './reducers/'
import thunk from 'redux-thunk';

const store = createStore(allReducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
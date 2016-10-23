import React,{Component} from 'react';
import {render} from 'react-dom';
import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';


let logger = createLogger();

const store = createStore(
    counter,
  applyMiddleware(logger)
);



import App from './App';
import Counter from './components/counter';


render(
    <Provider store={store}>
        <Counter/>
    </Provider>,
    document.getElementById('app')
);



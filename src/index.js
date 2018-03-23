import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers/index';

const creatStoreWithMiddleware = applyMiddleware(ReduxThunk,logger)(createStore);

ReactDOM.render(
    <Provider store={creatStoreWithMiddleware(rootReducer)}>
        <Game />
    </Provider>,
    document.getElementById('app')
);



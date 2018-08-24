import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './redux';
import './index.css';

import whyDidYouUpdate from 'why-did-you-update';

const creatStoreWithMiddleware = applyMiddleware(ReduxThunk,logger)(createStore);
whyDidYouUpdate(React);

ReactDOM.render(
    <Provider store={creatStoreWithMiddleware(rootReducer)}>
        <Game />
    </Provider>,
    document.getElementById('app')
);

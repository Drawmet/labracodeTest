import React from 'react';
import {render} from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers/Reducer';
import thunk from 'redux-thunk';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

let store = createStore(Reducer, applyMiddleware(thunk));

render(
    <Provider { ...{store}}>
        <App />
    </Provider>
    , document.getElementById('root'));
//registerServiceWorker();

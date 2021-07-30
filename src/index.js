import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducer from './Components/reduxStore/reducers/allReducer';
import HttpsRedirect from 'react-https-redirect';

const analyticaStore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <HttpsRedirect>
        <Provider store = {analyticaStore}>
            <App />
        </Provider>
    </HttpsRedirect>
    , document.getElementById('root'));

reportWebVitals();

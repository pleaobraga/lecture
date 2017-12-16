import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  { Provider } from 'react-redux' 
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

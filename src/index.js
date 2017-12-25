import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  { Provider } from 'react-redux' 
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'

const store = createStore(
    rootReducers,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
    <Provider store={store} >
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

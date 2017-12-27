import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  { Provider } from 'react-redux' 
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers'
import Home from '../src/pages/Home/Home'
import CategoryFiltered from '../src/pages/CategoryFiltered/CategoryFiltered'

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/:category/posts" component={CategoryFiltered} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

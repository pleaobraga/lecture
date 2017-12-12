import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import  { Provider } from 'react-redux' 
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


ReactDOM.render(
    <App />, 
    document.getElementById('root'));
registerServiceWorker();

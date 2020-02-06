import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./redux/reducer"

const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router> 
    </Provider>,
document.getElementById('root'));

 
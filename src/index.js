import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {expenses as initialExpenses} from './data'
import SelectedReducer from './SelectedReducer'
import ExpensesReducer from './ExpensesReducer'
import {reduce} from 'lodash'

const uberReducer = combineReducers({
    expenses: ExpensesReducer,
    selected: SelectedReducer

})

const initialState = {
    expenses: reduce(initialExpenses, (acc, e) => {
        acc[e.id] = e
        return acc
        }, {}),
    selected: initialExpenses[0].id

}

const store = createStore(uberReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

import {createStore} from 'redux'

const createStore = (reducer, initialState) => ({
    const state = initialState,
    const listeners = [],

    getState : () => state,


    dispatch: (action) => {
        state = reducer(this.getState(), action)
        forEach(this.listeners, (listener) => listener())

    },

    subscribe: (l) => {
    listeners.push(l);
    return () => { filter(listeners, listener => {l !== listener }


})

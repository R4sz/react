const reducer = (state = {}, action) => {
    const {payload} = action
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {...state, [payload.id] : payload}
        case 'DELETE_EXPENSE':
            const newState =  { ...state }
            delete newState[action.payload.id]
            return state
        default:
            return false;
    }
}

const res1 = reducer(undefined, {
    type: 'ADD_EXPENSE',
    payload: {id: 123, category: 'food' }
})

const res2 = reducer(res1, {
    type: 'DELETE_EXPENSE',
    payload: {id: 123}
})
)

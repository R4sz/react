
export default (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            const updatedExpense = {...state[action.payload.id], status: !state[action.payload.id].status}
            const updated = {...state, [updatedExpense.id]: updatedExpense}
            return updated
        case 'ADD_NEW_ROW':
            console.log("add new row")
        default:
            return state
    }
}

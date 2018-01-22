export default (state = null, action) => {
    const {payload} = action
    switch (action.type) {
        case 'SELECT_EXPENSES':
            return action.payload
        default:
            return state;
    }
}



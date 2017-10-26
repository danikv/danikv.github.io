const locationReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_LOCATION':
            return [
                ...state,
                action.location
            ]
        case 'REMOVE_LOCATION':
            return state.filter(location => (action.location.key !== location.key))
        case 'EDIT_LOCATION':
            return state.map(location => {
                if(location.key === action.oldLocation.key) {
                    return action.newLocation
                }
                return location
            })
        default:
            return state
    }
}

export default locationReducer
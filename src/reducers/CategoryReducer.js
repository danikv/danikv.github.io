const categoryReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_CATEGORY':
            return [
                ...state,
                action.category
            ]
        case 'REMOVE_CATEGORY':
            return state.filter(category => (action.category !== category))
        case 'EDIT_CATEGORY':
            return state.map(category => {
                if(category === action.oldCategory) {
                    return action.newCategory
                }
                return category
            })
        default:
            return state
    }
}

export default categoryReducer
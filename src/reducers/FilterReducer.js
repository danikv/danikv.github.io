const categoryReducer = (state = {
    groupFilter: false,
    sortFilter: false,
    categoryFilter: ''
}, action) => {
    console.log(action)
    switch(action.type){
        case 'GROUP_FILTER':
            return {
                ...state,
                groupFilter: action.filter
            }
        case 'SORT_FILTER':
            return {
                ...state,
                sortFilter: action.filter
            }
        case 'CATEGORY_FILTER':
            return {
                ...state,
                categoryFilter: action.filter
            }
        default:
            return state
    }
}

export default categoryReducer
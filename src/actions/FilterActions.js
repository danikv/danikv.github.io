export const groupFilter = (state) => {
    return {
        type: 'GROUP_FILTER',
        filter: state
    }
}

export const sortFilter = (state) => {
    return {
        type: 'SORT_FILTER',
        filter: state
    }
}

export const categoryFilter = (category) => {
    return {
        type: 'CATEGORY_FILTER',
        filter: category
    }
}
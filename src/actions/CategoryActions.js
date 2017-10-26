export const addCategory = (category) => {
    return {
        type: 'ADD_CATEGORY',
        category: category
    }
}

export const removeCategory = (category) => {
    return {
        type: 'REMOVE_CATEGORY',
        category: category
    }
}

export const editCategory = (oldCategory, newCategory) => {
    return {
        type: 'EDIT_CATEGORY',
        oldCategory: oldCategory,
        newCategory: newCategory
    }
}
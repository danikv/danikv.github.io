export const addLocation = (location) => {
    return {
        type: 'ADD_LOCATION',
        location: location
    }
}

export const removeLocation = (location) => {
    return {
        type: 'REMOVE_LOCATION',
        location: location
    }
}

export const editLocation = (oldLocation, newLocation) => {
    return {
        type: 'EDIT_LOCATION',
        oldLocation: oldLocation,
        newLocation: newLocation
    }
}
import { combineReducers } from 'redux'
import categoryReducer from './CategoryReducer'
import locationReducer from './LocationReducer'

const reducers = combineReducers({
    categoryReducer,
    locationReducer
})

export default reducers
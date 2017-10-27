import { combineReducers } from 'redux'
import categoryReducer from './CategoryReducer'
import locationReducer from './LocationReducer'
import filterReducer from './FilterReducer'

const reducers = combineReducers({
    categoryReducer,
    locationReducer,
    filterReducer
})

export default reducers
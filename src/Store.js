import reducers from './reducers/index'
import { loadState, saveState } from './LocalStorage'
import { createStore } from 'redux'

const persistentState = loadState()

const store = createStore(
    reducers,
    persistentState
)

store.subscribe( () => {
    saveState({
        categoryReducer: store.getState().categoryReducer,
        locationReducer: store.getState().locationReducer
    })
})

export default store
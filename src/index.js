import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import reducers from './reducers/index'
import { loadState, saveState } from './LocalStorage'
import './FixReactBugs'

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

ReactDOM.render(<Router>
                    <Provider store={store}> 
                        <App store={store}/>
                    </Provider> 
                </Router>, document.getElementById('root'));
registerServiceWorker();
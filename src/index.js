import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import store from './Store'
import './FixReactBugs'

ReactDOM.render(<Router>
                    <Provider store={store}> 
                        <App store={store}/>
                    </Provider> 
                </Router>, document.getElementById('root'));
registerServiceWorker();
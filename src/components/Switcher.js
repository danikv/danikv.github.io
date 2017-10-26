import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'
import CategoriesMainPage from '../containers/CategoriesMainPage'
import LocationsMainPage from '../containers/LocationsMainPage'

const Switcher = () => (
    <Switch>
        <Route exact path="/locations" component={ LocationsMainPage } />
        <Route exact path="/categories" component={ CategoriesMainPage } />
        <Route exact path="/" component={ LocationsMainPage } />
        <Route component={ NoMatch } />
    </Switch>
)

export default Switcher
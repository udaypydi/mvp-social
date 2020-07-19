import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app';

function RoutesManager() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
    )
}

export default RoutesManager;

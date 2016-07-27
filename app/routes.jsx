var React = require('react');
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import hashHistory from 'react-router/lib/hashHistory';

import { Provider } from 'react-redux';
import store from './store';

var App = require("./views/App.jsx");
var NotFound = require("./views/NotFound.jsx");
var Index = require("./views/Index.jsx");
import AsyncDemoContainer from './containers/AsyncDemoContainer';

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="asyncdemo/:val" component={AsyncDemoContainer} />
        <Route path="*" component={NotFound} />
    </Route>
);

// TODO: separate root
var root = (
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>
);

module.exports = root;

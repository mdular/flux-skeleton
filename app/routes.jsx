var React = require('react');
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import hashHistory from 'react-router/lib/hashHistory';

var App = require("./views/App.jsx");
var NotFound = require("./views/NotFound.jsx");
var Index = require("./views/Index.jsx");
var AsyncDemo = require("./views/AsyncDemo.jsx");

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="asyncdemo/:val" component={AsyncDemo} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

module.exports = routes;

var React = require('react');
// var { Route, Redirect, NotFoundRoute, Redirect, DefaultRoute } = require("react-router");
var { Router, Route, IndexRoute, Link, hashHistory, NotFoundRoute } = require("react-router");
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

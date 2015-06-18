var React = require("react");
var { Route, Redirect, NotFoundRoute, Redirect, DefaultRoute } = require("react-router");
var App = require("./views/App.jsx");
var NotFound = require("./views/NotFound.jsx");
var Index = require("./views/Index.jsx");
var AsyncDemo = require("./views/AsyncDemo.jsx");

export default (
    <Route path="/" handler={App}>
        <NotFoundRoute handler={NotFound} />
        <DefaultRoute name="index" handler={Index} />
        <Route name="asyncdemo" handler={AsyncDemo} path="/asyncdemo/?:val?/?:val2?" />
    </Route>
);

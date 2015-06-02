var React = require("react");
var { Route, Redirect, NotFoundRoute, Redirect, DefaultRoute } = require("react-router");
var App = require("./views/App.jsx");
var NotFound = require("./views/NotFound.jsx");
var Index = require("./views/Index.jsx");

export default (
    <Route path="/?:val?" handler={App}>
        <NotFoundRoute handler={NotFound} />
        <DefaultRoute name="index" handler={Index} />
        {/* <Route name="myview" handler={MyView} path="/myview/?:val?" /> */}
    </Route>
);

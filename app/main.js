/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */ // is compiled in strict mode

var React = require("react");
var {render} = require("react-dom");
var { Router, Route, IndexRoute, Link, hashHistory } = require("react-router");

var App = require("./views/App.jsx");
var Index = require("./views/Index.jsx");
var routes = require("./routes.jsx");

// var Navigation = require("./views/Navigation.jsx");
// var EventActions = require("./actions/EventActions");

global.renderApp = function () {
    "use strict";

    render(
        routes,
        document.querySelector('main')
    );
};

// example to expose an API to our app
// global.refreshEvents = function (date, employeeId) {
//    "use strict";
//
//     if (typeof employeeId === 'undefined') {
//         EventActions.loadEvents(date);
//     } else {
//         EventActions.loadWeek(date, employeeId);
//     }
// };

renderApp();

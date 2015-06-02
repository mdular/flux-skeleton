/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */ // is compiled in strict mode

var React = require("react");
var Router = require("./router");
var routes = require("./routes.jsx");

// var Navigation = require("./views/Navigation.jsx");
// var EventActions = require("./actions/EventActions");

global.renderApp = function () {
    "use strict";

    Router.run(function (Handler, state) {
        React.render(<Handler />, document.querySelector('main'));

        // example for navigation rendered to a separate container.
        //React.render(<Navigation />, document.querySelector('#nav'));
    });
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

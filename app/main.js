/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */ // is compiled in strict mode

var React = require("react");
var {render} = require("react-dom");
var { Router, Route, IndexRoute, Link, hashHistory } = require("react-router");
// var routes = require("./routes.jsx");

// var Navigation = require("./views/Navigation.jsx");
// var EventActions = require("./actions/EventActions");

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>Hi!</h1>
                {this.props.children}
            </div>
        );
    }
});

var Index = React.createClass({
    render() {
        return (
            <div>index!</div>
        );
    }
})

global.renderApp = function () {
    "use strict";

    // Router.run(function (Handler, state) {
    //     React.render(<Handler />, document.querySelector('main'));
    //
    //     // example for navigation rendered to a separate container.
    //     //React.render(<Navigation />, document.querySelector('#nav'));
    // });

    // render(<App />, document.querySelector('main'));

    render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
            </Route>
        </Router>,
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

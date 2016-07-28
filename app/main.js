/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */ // is compiled in strict mode

var {render} = require("react-dom");
var routes = require("./routes.jsx");

global.renderApp = function () {
    "use strict";

    render(
            routes,
            document.querySelector('main')
    );
};
renderApp();

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

// import store from './store';
// console.log('state', store.getState());
// let unsubscribe = store.subscribe(() => {
//     console.log('state', store.getState());
// })

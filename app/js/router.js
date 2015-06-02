// router is private in this commonjs module
var router;

// expose router api to access across components
// please note that you will have to further expose the router API here if
//  you require additional functionality
export default {
    makePath(to, params, query) {
        return router.makePath(to, params, query);
    },

    makeHref(to, params, query) {
        return router.makeHref(to, params, query);
    },

    transitionTo(to, params, query) {
        router.transitionTo(to, params, query);
    },

    replaceWith(to, params, query) {
        router.replaceWith(to, params, query);
    },

    goBack() {
        router.goBack();
    },

    isActive(to, params, query) {
        return router.isActive(to, params, query);
    },

    run(render) {
        router.run(render);
    },

    getCurrentParams() {
        return router.getCurrentParams();
    },
};

// By the time routes are required  "require('./router')"  returns the already
//  exported proxy object
var routes = require('./routes.jsx'),
    Router = require('react-router');

// create the private router
router = Router.create({
    routes: routes,
    //location: Router.HistoryLocation
    location: Router.HashLocation
});

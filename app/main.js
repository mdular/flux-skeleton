/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */ // is compiled in strict mode

import { render } from 'react-dom';
import root from './root.jsx';

global.renderApp = function () {
    "use strict";

    render(
        root,
        document.querySelector('main')
    );
};
renderApp();

// example to expose a public API to our app
import store from './store';
import { loadData } from './actions/AsyncDemoActions';
global.loadData = function (reference) {
   "use strict";

    store.dispatch(loadEvents(reference));
};
loadData('D1I4X');

// observe the store state
// import store from './store';
// console.log('state', store.getState());
// let unsubscribe = store.subscribe(() => {
//     console.log('state', store.getState());
// })

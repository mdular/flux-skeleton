import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';
import store from './store';
import routes from './routes.jsx';

var root = (
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>
);

export default root;

import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './views/App.jsx';
import NotFound from './views/NotFound.jsx';
import Index from './views/Index.jsx';
import AsyncDemoContainer from './containers/AsyncDemoContainer';

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="asyncdemo/:val" component={AsyncDemoContainer} />
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;

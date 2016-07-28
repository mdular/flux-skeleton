/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */

import React from 'react';
import IndexLink from 'react-router/lib/IndexLink';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Not found</h1>
                <IndexLink to="/">Index</IndexLink>
            </div>
        );
    }
});

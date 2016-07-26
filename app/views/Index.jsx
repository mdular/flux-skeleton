/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */

import React from 'react';

module.exports = React.createClass({
    render() {
        var newVal = Math.round(Math.random() * 1000);

        return (
            <div className="row">
                <h1>Index</h1>
            </div>
        );
    }
});

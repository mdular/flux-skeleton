/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */

import React from 'react';
import Navigation from './Navigation.jsx';

module.exports = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <Navigation />
                {this.props.children}
            </div>
        );
    }
});

/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */

var React = require('react');
import IndexLink from 'react-router/lib/IndexLink';

module.exports = React.createClass({
    render() {
        return (
            <div>
                <h1>Not found</h1>
                <IndexLink to="/">Index</IndexLink>
            </div>
        );
    }
});

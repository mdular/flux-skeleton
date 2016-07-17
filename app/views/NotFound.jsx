/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */

var React = require('react');
var { IndexLink } = require("react-router");

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

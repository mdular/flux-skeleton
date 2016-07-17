/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */

var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                {this.props.children}
            </div>
        );
    }
});

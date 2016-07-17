/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */

var React = require('react');
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';

module.exports = React.createClass({
    render() {
        var newVal = Math.round(Math.random() * 1000);

        return (
            <div className="row">
                <h1>Index</h1>
                <ul>
                    <li>
                        <IndexLink to="/">Index</IndexLink>
                    </li>
                    <li>
                        <Link to="/asyncdemo/D1I4X">Async Demo</Link>
                    </li>
                </ul>
            </div>
        );
    }
});

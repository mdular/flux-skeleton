/**
 * @author Markus J Doetsch mdular.com
 */
/*jshint strict: false */

var React = require("react");
var { Link } = require("react-router");

export default React.createClass({

    render() {
        var newVal = Math.round(Math.random() * 1000);

        return (
            <div className="row">
                <h1>Index</h1>
                <ul>
                    <li>
                        <Link to="index">Index</Link>
                    </li>
                    <li>
                        <Link to="asyncdemo" params={{val:1, val2:"D-1I4X"}}>Async Demo</Link>
                    </li>
                </ul>
            </div>
        );
    }
});

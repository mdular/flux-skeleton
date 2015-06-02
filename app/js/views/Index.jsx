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
                        <Link to="index" params={{val:newVal}}>Index with param (currently val={this.props.params.val})</Link>
                    </li>
                </ul>
            </div>
        );
    }
});

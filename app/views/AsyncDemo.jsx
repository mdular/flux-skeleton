/**
 * @author Markus J Doetsch
 */
/*jshint strict: false */

var React = require("react");
var { Link } = require("react-router");
var AsyncDemoStore = require("../stores/AsyncDemoStore");
var AsyncDemoActions = require("../actions/AsyncDemoActions");

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState() {
        return AsyncDemoStore.getState();
    },

    componentWillMount() {
        AsyncDemoStore.listen(this.onChange);

        var params = this.props.params
        AsyncDemoActions.loadData(params.val);
    },

    componentWillUnmount() {
        AsyncDemoStore.unlisten(this.onChange);
    },

    onChange() {
        this.setState(AsyncDemoStore.getState());
    },

    render: function () {
        //var params = this.context.router.getCurrentParams();
        var params = this.props.params;
        var comments = this.state.comments.map(function(item) {
            return item.author;
        });

        return (
            <div className="row">
                <Link to="index">Back</Link>
                <h1>Test</h1>
                <p>{params.val}</p>
                <p>{params.val2}</p>
                <p>{comments}</p>
            </div>
        );
    }
});

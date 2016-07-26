/**
 * @author Markus J Doetsch
 */
/*jshint strict: false */

import React from 'react';
var AsyncDemoStore = require("../stores/AsyncDemoStore");
var AsyncDemoActions = require("../actions/AsyncDemoActions");

module.exports = React.createClass({

    getInitialState() {
        // console.log(AsyncDemoStore.getState());

        return AsyncDemoStore.getState();
    },

    componentWillMount() {
        AsyncDemoStore.listen(this.onChange);

        AsyncDemoActions.loadData(this.props.params.val);
    },

    componentWillUnmount() {
        AsyncDemoStore.unlisten(this.onChange);
    },

    onChange() {
        this.setState(AsyncDemoStore.getState());
    },

    render: function () {
        var params = this.props.params;
        // console.log(params);

        // console.log(this.state.appData);

        var dataList = this.state.appData.map(function(item, index) {
            return <p key={index}>{item.ref}: {item.description}</p>;
        });

        var state = this.state.loading ? 'loading data...' : 'loaded data:'

        return (
            <div className="row">
                <h1>Async Demo</h1>
                <p>URL param 'val': {params.val}</p>
                <h3>{state}</h3>
                {dataList}
            </div>
        );
    }
});

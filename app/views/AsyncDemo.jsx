/**
 * @author Markus J Doetsch
 */
/*jshint strict: false */

import React from 'react';

module.exports = React.createClass({

    // getInitialState() {
    //     // console.log(AsyncDemoStore.getState());
    //     // return AsyncDemoStore.getState();
    //     return {appData:[], loading:false};
    // },

    componentWillMount() {
        this.props.loadData(this.props.params.val);
    },

    // componentWillUnmount() {
    //
    // },

    render: function () {
        // console.log(this.props);

        var params = this.props.params;
        // console.log(params);

        var dataList = this.props.appData.map(function(item, index) {
            return <p key={index}>{item.ref}: {item.description}</p>;
        });

        var state = this.props.loading ? 'loading data...' : 'loaded data:'

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

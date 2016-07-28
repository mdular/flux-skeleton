/**
 * @author Markus J Doetsch
 */
/*jshint strict: false */

import React from 'react';
import { Link } from 'react-router';

module.exports = React.createClass({

    componentWillMount() {
        this.props.loadData(this.props.params.val);
    },

    componentDidUpdate(prevProps, prevState) {
        // console.log('componentDidUpdate', prevProps, this.props);

        if (prevProps.params.val !== this.props.params.val) {
            this.props.loadData(this.props.params.val);
        }
    },

    // componentWillUnmount() {
    //
    // },

    render: function () {
        // console.log(this.props);
        let params = this.props.params;
        let state = this.props.loading ? 'loading...' : 'loading done.';

        let dataList = Object.keys(this.props.data).map((reference, index) => {
            let properties = Object.keys(this.props.data[reference]).map((property, index) => {
                return (
                    <p key={index}>{property}:{this.props.data[reference][property]}</p>
                );
            });

            return (
                <div key={index}>
                    <h3>{reference}</h3>
                    {properties}
                </div>
            );
        });

        return (
            <div className="row">
                <h1>Async Demo</h1>
                <p>URL param 'val': {params.val}</p>
                <h3>{state}</h3>
                {dataList}
                <Link to="/asyncdemo/XX234">XX234</Link>
            </div>
        );
    }
});

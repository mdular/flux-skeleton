import React from 'react';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';

export default React.createClass({
    render() {
        return (
            <nav>
                <ul>
                    <li><IndexLink to="/">Index</IndexLink></li>
                    <li><Link to="/asyncdemo/D1I4X">Async Demo</Link></li>
                </ul>
            </nav>
        );
    }
});

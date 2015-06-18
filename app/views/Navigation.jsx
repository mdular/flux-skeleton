/**
 * @author Markus J Doetsch
 */
/*jshint strict: false */

var React = require("react");
var Link = require("./RouterLink.jsx");

export default React.createClass({

    getInitialState() {
        return null;
    },

    componentWillMount() {

    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render: function () {
        return (
            <ul className="nav navbar-nav not-nav">
                <li className="button">
                    <Link to="test" params={{key:1, val: 2}}><i className="icon-calendar"></i>Calendar</Link>
                </li>

                <li className="button dropdown">
                    <a href="/app/clients">
                        <i className="icon-client"></i>Clients
                    </a>
                </li>

                {/*
                <li className="button dropdown">
                    <a className="dropdown-toggle" href="javascript:;" data-toggle="dropdown">
                        <i className="icon-report"></i>#Reports
                    </a>
                    <ul className="dropdown-menu messages">
                        <li>
                            <div className="nano nscroller">
                                <div className="content">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="/img/flatdream/avatar2.jpg" alt="avatar"/>
                                                <span className="date pull-right">13 Sept.</span> <span className="name">Daniel</span>
                                                Hey! How are you?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/img/flatdream/avatar_50.jpg" alt="avatar"/>
                                                <span className="date pull-right">20 Oct.</span><span className="name">Adam</span>
                                                Hi! Can you fix my phone?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/img/flatdream/avatar4_50.jpg" alt="avatar"/>
                                                <span className="date pull-right">2 Nov.</span><span className="name">Michael</span>
                                                Regards!
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/img/flatdream/avatar3_50.jpg" alt="avatar"/>
                                                <span className="date pull-right">2 Nov.</span><span className="name">Lucy</span>
                                                Hello, my name is Lucy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="foot">
                                <li><a href="#">View all messages</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                 */}

                <li className="button button-right">
                    <a href="javascript:;" className="toggle-menu menu-right push-body">Menu</a>
                </li>
            </ul>
        );
    }
});

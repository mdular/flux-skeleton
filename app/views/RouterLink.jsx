/**
 * react-router link to be usable outside of handler
 *
 * @author Markus J Doetsch
 */
/*jshint strict: false */

var React = require("react");
var Router = require("../router");
var assign = require("react/lib/Object.assign");

function isLeftClickEvent(event) {
    return event.button === 0;
}

function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export default React.createClass({

    propTypes: {
        activeClassName: React.PropTypes.string,
        to: React.PropTypes.string.isRequired,
        params: React.PropTypes.object,
        query: React.PropTypes.object,
        className: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            activeClassName: "active",
            className: ""
        };
    },

    getInitialState() {
        return null;
    },

    componentWillMount() {
    },

    componentWillUnmount() {
    },

    isActive() {
        return Router.isActive(this.props.to, this.props.params, this.props.query);
    },

    getClassName() {
        var className = this.props.className;

        if (this.isActive()) {
            className += " " + this.props.activeClassName;
        }

        return className;
    },

    handleClick(event) {
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
            return;
        }

        event.preventDefault();

        Router.transitionTo(this.props.to, this.props.params, this.props.query);
    },

    render: function () {
        var props = assign({}, this.props, {
            href: Router.makeHref(this.props.to, this.props.params, this.props.query),
            className: this.getClassName(),
            onClick: this.handleClick
        });

        return (
            React.DOM.a(props, this.props.children)
        );
    }
});

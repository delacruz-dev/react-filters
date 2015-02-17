/** @jsx React.DOM */
'use strict'
var React = require('react')

module.exports = React.createClass({
	displayName: 'PriceSelectItem',
	render: function() {
		return (
			<li id="{this.props.id}">{this.props.value}</li>
		);
	}

});
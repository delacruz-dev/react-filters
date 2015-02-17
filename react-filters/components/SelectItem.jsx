/** @jsx React.DOM */
'use strict'
var React = require('react')

module.exports = React.createClass({
	displayName: 'SelectItem',
	render: function() {
		return (
			<li id="{this.props.id}" onClick={this.props.handleSelect}>
				{this.props.value}
			</li>
		);
	}

});
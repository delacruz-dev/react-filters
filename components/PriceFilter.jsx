/** @jsx React.DOM */
'use strict'
var React = require('react')
var SelectItem = require('./SelectItem')

module.exports = React.createClass({
	displayName: 'PriceFilter',
	render: function() {
		var prices = [];

		this.props.prices.forEach(function(price) {
			prices.push(<SelectItem id={price.id} value={price.value} />);
		});
		return (
			<ul>{prices}</ul>
		);
	}
});
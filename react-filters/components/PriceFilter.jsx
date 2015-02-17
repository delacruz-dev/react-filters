/** @jsx React.DOM */
'use strict'
var React = require('react')
var SelectItem = require('./SelectItem')

module.exports = React.createClass({
	displayName: 'PriceFilter',
	getInitialState: function() {
		return {
			prices: PRICES 
		};
	},
	render: function() {
		var prices = [];
		this.state.prices.forEach(function(price) {
			prices.push(<SelectItem id={price.id} value={price.value} />);
		});
		return (
			<ul>{prices}</ul>
		);
	}
});

var PRICES = [ 
	{ 'id' : 150, 'value' : 'From 150' },
	{ 'id' : 300, 'value' : 'From 300' },
	{ 'id' : 450, 'value' : 'From 450' },
	{ 'id' : 600, 'value' : 'From 600' },
	{ 'id' : 700, 'value' : 'From 700' },
	{ 'id' : 800, 'value' : 'From 800' },
	{ 'id' : 900, 'value' : 'From 900' }
];
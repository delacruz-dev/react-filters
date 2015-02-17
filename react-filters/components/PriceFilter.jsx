/** @jsx React.DOM */
'use strict'
var React = require('react')
var PriceSelectItem = require('./PriceSelectItem')

module.exports = React.createClass({
	displayName: 'PriceFIlter',
	render: function() {
		return (
			<ul>
				<PriceSelectItem id="1" value="I'm the first select item" />
				<PriceSelectItem id="2" value="I'm the second select item" />
			</ul>
		);
	}

});
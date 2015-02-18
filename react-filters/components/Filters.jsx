/** @jsx React.DOM */
'use strict'

var React = require('react')
var BuildingTypeFilter = require('./BuildingTypeFilter')
var PriceFilter = require('./PriceFilter')

module.exports = React.createClass({
	displayName: 'Filters',
	onBuildingTypeChange: function(){
		console.log("The building type has changed");
	},
	render: function() {
		return (
			<form>
			<BuildingTypeFilter handleSelect={this.onBuildingTypeChange} />
			<PriceFilter />
			<input type='submit' value='Show Results'></input>
			</form>
		);
	}

});
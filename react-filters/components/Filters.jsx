/** @jsx React.DOM */
'use strict'

var React = require('react')
var BuildingTypeFilter = require('./BuildingTypeFilter')
var PriceFilter = require('./PriceFilter')

module.exports = React.createClass({
	displayName: 'Filters',
	getInitialState: function() {
		return {
			buildingTypes: BUILDING_TYPES,
			prices: PRICES
		};
	},
	onBuildingTypeChange: function(){
		console.log("The building type has changed");
	},
	render: function() {
		return (
			<form>
				<BuildingTypeFilter 
					buildingTypes={this.state.buildingTypes} 
					handleSelect={this.onBuildingTypeChange} />
				<PriceFilter prices={this.state.prices} />
				<input type='submit' value='Show Results'></input>
			</form>
		);
	}
});


var BUILDING_TYPES = [ 
	{ 'id' : 1, 'value' : 'Homes' },
	{ 'id' : 2, 'value' : 'New Homes' },
	{ 'id' : 3, 'value' : 'Luxury Homes' },
	{ 'id' : 4, 'value' : 'Commercial premises' },
	{ 'id' : 5, 'value' : 'Garages' },
	{ 'id' : 6, 'value' : 'Land' },
	{ 'id' : 7, 'value' : 'Offices' },
	{ 'id' : 8, 'value' : 'Box rooms' },
];


var PRICES = [ 
	{ 'id' : 150, 'value' : 'From 150' },
	{ 'id' : 300, 'value' : 'From 300' },
	{ 'id' : 450, 'value' : 'From 450' },
	{ 'id' : 600, 'value' : 'From 600' },
	{ 'id' : 700, 'value' : 'From 700' },
	{ 'id' : 800, 'value' : 'From 800' },
	{ 'id' : 900, 'value' : 'From 900' }
];
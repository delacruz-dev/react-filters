/** @jsx React.DOM */
'use strict'

var React = require('react')
var SelectItem = require('./SelectItem')

module.exports = React.createClass({
	displayName: 'BuildingTypeFilter',
	getInitialState: function() {
		return {
			buildingTypes: BUILDING_TYPES 
		};
	},
	handleSelect: function(){
		console.log('Must update the price filter!');
	},
	render: function() {
		var buildingTypes = [];
		var self = this;
		this.state.buildingTypes.forEach(function(buildingType) {
			buildingTypes.push(
				<SelectItem id={buildingType.id} 
							value={buildingType.value}  
							handleSelect={self.handleSelect} />);
		});
		return (
			<ul>{buildingTypes}</ul>
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
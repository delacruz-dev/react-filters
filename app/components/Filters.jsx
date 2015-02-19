/** @jsx React.DOM */
'use strict'

var React = require('react')
var BuildingTypeFilter = require('./BuildingTypeFilter')
var PriceFilter = require('./PriceFilter')
var utils = require('../common/utils')

module.exports = React.createClass({
	displayName: 'Filters',
	getInitialState: function() {
		return {
			buildingTypes: [],
			prices: PRICES.filter(function(n){ return n.buildingType === 1; })[0].prices
		};
	},
	componentWillMount: function() {
		utils.httpRequest('http://localhost:8091/real-estate/filters/building-type', this.onGetFiltersSuccess, this.onGetFiltersError);
	},
	onGetFiltersSuccess: function(responseData){
		this.setState({
			buildingTypes: JSON.parse(responseData).buildingTypes
		});
	},
	onGetFiltersError: function(erro){
		console.log("Get Filters error");
	},
	onBuildingTypeChange: function(e){
		var element = PRICES.filter(function(n){ return n.buildingType == e.target.id; });
		this.setState({
			prices: element[0].prices 
		});
	},
	render: function() {
		return (
			<form>
				<BuildingTypeFilter 
					buildingTypes={this.state.buildingTypes} 
					onSelectItem={this.onBuildingTypeChange} 
					ref="buildingType" />
				<PriceFilter prices={this.state.prices} />
				<input type='submit' value='Show Results'></input>
			</form>
		);
	}
});


var PRICES = [ { buildingType: 1, prices: [
					{ 'id' : 150, 'value' : 'From 150' },
					{ 'id' : 300, 'value' : 'From 300' },
					{ 'id' : 450, 'value' : 'From 450' },
					{ 'id' : 600, 'value' : 'From 600' },
					{ 'id' : 700, 'value' : 'From 700' },
					{ 'id' : 800, 'value' : 'From 800' },
					{ 'id' : 900, 'value' : 'From 900' }
					] 
				},
				{ buildingType: 2, prices: [
					{ 'id' : 150000, 'value' : 'From 150.000' },
					{ 'id' : 300000, 'value' : 'From 300.000' },
					{ 'id' : 450000, 'value' : 'From 450.000' },
					{ 'id' : 600000, 'value' : 'From 600.000' },
					{ 'id' : 700000, 'value' : 'From 700.000' },
					{ 'id' : 800000, 'value' : 'From 800.000' },
					{ 'id' : 900000, 'value' : 'From 900.000' }
					] 
				}
];
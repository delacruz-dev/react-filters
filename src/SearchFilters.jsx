/** @jsx React.DOM */
'use strict'

var React=require('react')
var DropDownMenu=require('./js/components/DropDownMenu')
var utils=require('./js/common/utils')

var URL_FILTERS='http://localhost:8091/real-estate/filters';
var jsonData={};

module.exports=React.createClass({
	displayName: 'SearchFilters',
	getInitialState: function() {
		return {
			buildingTypes: [],
			transactionTypes: [],
			prices: []
		};
	},
	componentWillMount: function() {
		var self=this;
		utils.httpRequest(URL_FILTERS,
			function(responseData){
				jsonData=JSON.parse(responseData);
				self.setState({
					buildingTypes: jsonData.buildingTypes,
					transactionTypes: jsonData.transactionTypes,
					prices: jsonData.prices.filter(function(n){ 
						return n.transactionType == 1; 
					})[0].values
		
				});
			},
			function(error){
				console.log('Error on getting filters')
			});
	},
	handleChange: function(e){
		this.setState({
			prices: jsonData.prices.filter(function(n){ 
						return n.transactionType == e.target.id; 
					})[0].values
		});
	},
	render: function() {
		return (
			<form>
			<div className="form-group">
				<DropDownMenu selectItems={this.state.buildingTypes} 
							  label="Building Type" />
				<DropDownMenu selectItems={this.state.transactionTypes} 
							  label="Transaction Type" 
							  onChange={this.handleChange} />
				<DropDownMenu selectItems={this.state.prices} 
							  label="Price" />
				<input type='submit' value='Show Results'
					   className="btn btn-default btn-info"></input>
			</div>
			</form>
		);
	}
});
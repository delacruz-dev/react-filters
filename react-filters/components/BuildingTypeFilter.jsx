/** @jsx React.DOM */
'use strict'

var React = require('react')
var SelectItem = require('./SelectItem')

module.exports = React.createClass({
	displayName: 'BuildingTypeFilter',
	render: function() {
		var buildingTypes = [];
		var props = this.props;
		props.buildingTypes.forEach(function(buildingType) {
			buildingTypes.push(
				<SelectItem id={buildingType.id} 
							value={buildingType.value}  
							onSelectItem={props.onSelectItem} />);
		});
		return (
			<ul>{buildingTypes}</ul>
		);
	}

});
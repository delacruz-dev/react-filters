/** @jsx React.DOM */
'use strict'

var React = require('react')
var SelectItem = require('./SelectItem')

module.exports = React.createClass({
	displayName: 'Selector',
	render: function() {
		var selectItems = [];
		var props = this.props;
		props.selectItems.forEach(function(selectItem) {
			selectItems.push(
				<SelectItem id = {selectItem.id} 
							value = {selectItem.value}  
							onSelectItem = {props.onSelectItem} />);
		});
		return (
			<ul>{selectItems}</ul>
		);
	}

});
/** @jsx React.DOM */
'use strict'

var React = require('react')
var SelectItem = require('./SelectItem')

module.exports = React.createClass({
	displayName: 'Selector',
	render: function() {
		var props = this.props;
		var selectItems = props.selectItems.map(function(selectItem) {
			return <SelectItem id = {selectItem.id} 
							   value = {selectItem.value}  
							   onSelectItem = {props.onSelectItem} />
		});
		return (
			<ul>{selectItems}</ul>
		);
	}

});
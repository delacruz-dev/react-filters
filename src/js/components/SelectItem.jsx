/** @jsx React.DOM */
'use strict'
var React=require('react')

module.exports=React.createClass({
	displayName: 'SelectItem',
	render: function() {
		return (
			<li>
				<a href="#" id={this.props.id} onClick={this.props.onSelectItem}>
					{this.props.value}
				</a>
			</li>
		);
	}

});
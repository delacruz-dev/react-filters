/** @jsx React.DOM */
'use strict'

var React=require('react')
var SelectItem=require('./SelectItem')

module.exports=React.createClass({
	displayName: 'DropDownMenu',
	render: function() {
		var props=this.props;
		var selectItems=props.selectItems.map(function(selectItem) {
			return <SelectItem id={selectItem.id} 
							   value={selectItem.value}  
							   onSelectItem={props.onChange} />
		});
		return (
			<div className="dropdown form-group">
				<button className="btn btn-default dropdown-toggle" type="button" 
						id={this.props.id} data-toggle="dropdown" aria-expanded="true">
					{this.props.label} <span className="caret"></span>
				</button>
				<ul className="dropdown-menu" role="menu" aria-labelledby={this.props.id}>
					{selectItems}
				</ul>
			</div>
		);
	}

});
/** @jsx React.DOM */
'use strict'

var React=require('react')
var SelectItem=require('./SelectItem')

module.exports=React.createClass({
	displayName: 'DropDownMenu',
	getInitialState: function() {
		return {
			label: this.props.label 
		};
	},
	handleSelectItem: function(e){
		var label = e.target.text;
		this.setState({
			label: label
		});
		if(this.props.onChange)
			this.props.onChange(e);
	},
	render: function() {
		var props=this.props;
		var self=this;
		var selectItems=props.selectItems.map(function(selectItem) {
			return <SelectItem id={selectItem.id} 
							   value={selectItem.value}  
							   onSelectItem={self.handleSelectItem} />
		});
		return (
			<div className="dropdown form-group">
				<button className="btn btn-default dropdown-toggle" type="button" 
						id={this.state.id} data-toggle="dropdown" aria-expanded="true">
					{this.state.label} <span className="caret"></span>
				</button>
				<ul className="dropdown-menu" role="menu" aria-labelledby={this.props.id}>
					{selectItems}
				</ul>
			</div>
		);
	}

});
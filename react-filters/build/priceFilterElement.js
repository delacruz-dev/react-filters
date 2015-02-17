var React = require('react');

var PriceFilterElement = React.createClass({displayName: "PriceFilterElement",

	render: function() {
		return (
			React.createElement("li", {id: "{this.props.id}"}, this.props.value)
		);
	}

});

module.exports = PriceFilterElement;
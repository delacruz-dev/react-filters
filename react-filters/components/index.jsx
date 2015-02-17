/** @jsx React.DOM */
'use strict'
var React = require('react')
var PriceFilter = require('./PriceFilter')
var BuildingTypeFilter = require('./BuildingTypeFilter')


React.renderComponent(<BuildingTypeFilter />, document.getElementById('building-type--filter'));
React.renderComponent(<PriceFilter />, document.getElementById('price--filter'));




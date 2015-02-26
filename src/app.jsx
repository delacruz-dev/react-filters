/** @jsx React.DOM */
'use strict'
var React = require('react')
var SearchFilters = require('./SearchFilters')
var ClassfiedAdList = require('./js/components/ClassifiedAdList')

$.get( "http://localhost:8091/scmspain/api/ads", function( data ) {
	React.render(<SearchFilters />, document.getElementById('filters'));
	React.render(<ClassfiedAdList data = {data} />, document.getElementById('results'));
});

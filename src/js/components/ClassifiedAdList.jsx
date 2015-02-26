/** @jsx React.DOM */
'use strict'

var React = require("react");
var ClassifiedAd = require("./ClassifiedAd");

module.exports = React.createClass({
  displayName: "ClassifiedAdList",
  render: function() {
    var items = this.props.data.classifiedAds.map(item => {
      return (
        <li className="SCM-ClassifiedList__Item">
          <ClassifiedAd data={item} />
        </li>
      );
    });

    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});
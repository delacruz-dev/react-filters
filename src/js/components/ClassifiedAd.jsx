/** @jsx React.DOM */
'use strict'

var React = require("react");

module.exports = React.createClass({
  displayName:"ClassifiedAd",
  renderFeatures: function (features) {
    var items = (features || []).join(" · ");

    return (
      <div className="scm-classified__features">
        {items}
      </div>
    );  
  },

  render: function() {
    return (
      <article
        className="scm-classified" 
        itemScope
        itemType="http://schema.org/Product">
        <div className="scm-classified__media">
          <img src={this.props.data.imageUrl} />
        </div>
        <div className="scm-classified__info">
          
          <div
            className="scm-classified__price"
            itemProp="offers"
            itemScope
            itemType="http://schema.org/Offer">
            <span itemProp="price">{this.props.data.price}</span>
          </div>
          <div className="scm-classified__location">
            {this.props.data.location}
          </div>
          <div className="scm-classified__date">
            {this.props.data.date}
          </div>
          <a
            className="scm-classified__title"
            href="/"
            itemProp="url">
            <span itemProp="name">{this.props.data.title}</span>
          </a>
          
          { this.renderFeatures(this.props.data.features) }
          
        </div>
      </article>
    );
  }
});
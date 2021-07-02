import React, { Component } from 'react';
import ShopItem from './shopItem';

class YouMayAlsoLike extends Component {
  render() {
    return (
      <div className="you-may-like">
        <div className="hr"></div>
        <h4 className="title">You may also like</h4>
        <div className="d-flex">
          {this.props.relatedItems.map((i) => (
            <ShopItem key={i._id} item={i}></ShopItem>
          ))}
        </div>
      </div>
    );
  }
}

export default YouMayAlsoLike;

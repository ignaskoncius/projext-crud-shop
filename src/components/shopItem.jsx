import React, { Component } from 'react';
import mainImage from '../static/shop/accessories/acc_hat_01_1.jpg';

class ShopItem extends Component {
  render() {
    return (
      <div className="shop-item">
        <img src={mainImage} alt="redneck hat" />
        <h5 className="item-title">Title</h5>
        <p className="item-price">Price eur</p>
      </div>
    );
  }
}

export default ShopItem;

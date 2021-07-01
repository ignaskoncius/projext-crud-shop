import React, { Component } from 'react';
import mainImage from '../static/shop/accessories/acc_hat_01_1.jpg';

class ShopItem extends Component {
  render() {
    const { price, title, image } = this.props.items;
    return (
      <div className="shop-item">
        <img src={require(`../static/shop/${image}1.jpg`).default} alt={title} />
        <h5 className="item-title">{title}</h5>
        <p className="item-price">{price} eur</p>
      </div>
    );
  }
}

export default ShopItem;

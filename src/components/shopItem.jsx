import React, { Component } from 'react';
import mainImage from '../static/shop/accessories/acc_hat_01_1.jpg';
import { Link } from 'react-router-dom';

class ShopItem extends Component {
  render() {
    const { price, title, image } = this.props.item;
    return (
      <div className="shop-item">
        <Link to="shop/item/1">
          <img src={require(`../static/shop/accessories/${image}1.jpg`).default} alt={title} />
          <h5 className="item-title">{title}</h5>
          <p className="item-price">{price} eur</p>
        </Link>
      </div>
    );
  }
}

export default ShopItem;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Price from './common/price';

class ShopItem extends Component {
  render() {
    const { price, title, image, _id, salePrice } = this.props.item;
    return (
      <div className="shop-item">
        <Link className="pos-rel" to={'shop/item/' + _id}>
          <img src={require(`../static/shop/accessories/${image}1.jpg`).default} alt={title} />
          <h5 className="item-title">{title}</h5>
          <Price salePrice={salePrice}>{price}</Price>
          {salePrice && <span className="sale">Sale</span>}
        </Link>
      </div>
    );
  }
}

export default ShopItem;

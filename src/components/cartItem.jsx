import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './common/button/button';

class CartItem extends Component {
  state = {
    qty: 1,
    image: '',
    total: 0,
  };

  handleQty = (event) => {
    this.setState({ qty: event.target.value });
  };

  componentDidMount() {
    const { image, quantity } = this.props.item;
    const imgImported = require(`../static/shop/accessories/${image}1.jpg`).default;
    this.setState({ qty: quantity, image: imgImported });
  }

  render() {
    const { price, title, color, size } = this.props.item;
    return (
      <div className="cart-item d-flex">
        <div className="item-preview d-flex cart-col first">
          <Link to="/">
            <img src={this.state.image} alt="clothes" />
          </Link>
          <div className="order-item-info">
            <Link to="/" />
            <h4>{title}</h4>
            <p>
              {color} / {size}
            </p>
            <Button link>remove</Button>
          </div>
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Price</h3>
          <h3 className="price">{price} eur</h3>
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Quantity</h3>
          <input className="cart-qty" type="number" value={this.state.qty} onChange={this.handleQty} />
        </div>
        <div className="cart-col">
          <h3 className="d-upto-800">Total</h3>
          <h3 className="price-total">1000 eur</h3>
        </div>
      </div>
    );
  }
}

export default CartItem;

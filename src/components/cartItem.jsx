import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartItem extends Component {
  state = {
    qty: 1,
  };

  handleQty = (event) => {
    this.setState({ qty: event.target.value });
  };

  render() {
    return (
      <div className="cart-item d-flex">
        <div className="item-preview d-flex cart-col first">
          <Link to="/">
            <img src="https://placeimg.com/150/100/any" alt="" />
          </Link>
          <div className="order-item-info">
            <Link to="/" />
            <h4>title</h4>
            <p>color / size</p>
            <button>remove</button>
          </div>
        </div>
        <div className="cart-col">
          <h3 className="price">1000 eur</h3>
        </div>
        <div className="cart-col">
          <input className="cart-qty" type="number" value={this.state.qty} onChange={this.handleQty} />
        </div>
        <div className="cart-col">
          <h3 className="price-total">1000 eur</h3>
        </div>
      </div>
    );
  }
}

export default CartItem;

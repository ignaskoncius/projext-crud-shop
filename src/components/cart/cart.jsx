import React, { Component } from 'react';
import CartList from '../cartList';
import Button from '../common/button/button';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="cartList">
          <CartList></CartList>
        </div>
        <div className="d-flex">
          <div className="cart__instructions">
            <label htmlFor="instructions">Special instructions for seller</label>
            <br />
            <textarea name="" id="instructions" cols="30" rows="10"></textarea>
          </div>
          <div className="cart-info">
            <h4 className="cart__title">
              Subtotal <span>1,159.99 eur</span>
            </h4>
            <i>Taxes and shipping calculated at checkout</i>
            <Button outline>Continue shopping</Button>
            <br />
            <Button>Check out</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
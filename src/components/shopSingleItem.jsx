import React, { Component } from 'react';
import Button from './common/button/button';

class SingleItem extends Component {
  render() {
    return (
      <div className="single-shop-item">
        <div className="d-flex">
          <div className="single__images-part w-50">
            <img className="single__main-image" src="https://placeimg.com/640/480/any/sepia" alt="main" />
            <div className="single__photos d-flex flex-wrap">
              {[1, 2, 3].map((img) => (
                <img src="https://placeimg.com/100/100/any/sepia" alt="" />
              ))}
            </div>
          </div>
          <div className="single__item-info-part">
            <h2 className="item-info__title">Title</h2>
            <p className="item-info__price">300 eur</p>
            <div className="item-info__options d-flex">
              <div>
                <label htmlFor="colors">Colors</label>
                <br />
                <select name="colors" id="colors">
                  <option value="1">Green</option>
                  <option value="2">Red</option>
                  <option value="3">Blue</option>
                </select>
              </div>
              <div>
                <label htmlFor="Sizes">Sizes</label>
                <br />
                <select name="Sizes" id="Sizes">
                  <option value="1">Small</option>
                  <option value="2">Medium</option>
                  <option value="3">Large</option>
                </select>
              </div>
            </div>
            <Button outline>Add to cart</Button>
            <Button>Buy it now</Button>
            <div>social</div>
          </div>
        </div>
        <p className="single-item__description">
          Introducing the GRANITE oversized crew neck t-shirt. This loose fitted tee is crafted from premium 160gm
          combed cotton yarn, resulting in a relaxed look and feel. The t-shirt features a slouchy chest pocket and
          tonal woven hem label. The fabric is treated with a dirty dye effect for a vintage look and is finished off
          with a heavy enzyme wash and silicone softener for a soft and smooth handle.
        </p>
      </div>
    );
  }
}

export default SingleItem;

import React, { Component } from 'react';

class SingleItem extends Component {
  render() {
    return (
      <div className="single-shop-item d-flex">
        <div className="single__images-part w-50">
          <img className="single__main-image" src="https://placeimg.com/640/480/any/sepia" alt="main" />
          <div className="single__photos d-flex flex-wrap">
            {[1, 2, 3].map((img) => (
              <img src="https://placeimg.com/150/150/any/sepia" alt="" />
            ))}
          </div>
        </div>
        <div className="single__item-info">
          <h2 className="item-info__title">Title</h2>
          <p className="item-info__price">300 eur</p>
          <div className="item-info__options d-flex">
            <div>
              <label htmlFor="colors">Colors</label>
              <select name="colors" id="colors">
                <option value="1">Green</option>
                <option value="2">Red</option>
                <option value="3">Blue</option>
              </select>
            </div>
            <div>
              <label htmlFor="Sizes">Sizes</label>
              <select name="Sizes" id="Sizes">
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleItem;

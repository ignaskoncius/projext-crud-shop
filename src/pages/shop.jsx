import React, { Component } from 'react';

class Shop extends Component {
  render() {
    const { shopCategories, socialLinks } = this.props.shop;
    return (
      <div className="shop-page">
        <aside className="categories-aside">
          <div className="categories">
            <ul>
              {shopCategories.map((item) => (
                <li key={item._id} className="categories-list-item">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="social">
            {socialLinks.map((item) => (
              <a href={item.to}>
                <i key={item.to} className={item.icon}></i>
              </a>
            ))}
          </div>
        </aside>
      </div>
    );
  }
}

export default Shop;

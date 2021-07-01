import React, { Component } from 'react';
import ShopList from '../components/shopList';

class Shop extends Component {
  render() {
    const { shopCategories, socialLinks } = this.props.shop;
    return (
      <div className="shop-page d-flex">
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
              <a key={item.to} href={item.to} target="_blank" rel="noreferrer" className="social__link">
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </aside>
        <main>
          <ShopList />
        </main>
      </div>
    );
  }
}

export default Shop;

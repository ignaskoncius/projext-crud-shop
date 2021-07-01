import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import ShopList from '../components/shopList';
import SingleItem from '../components/shopSingleItem';

class Shop extends Component {
  render() {
    const { shopCategories, socialLinks, items } = this.props.shop;
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
          <Switch>
            <Route path="/shop/item/1" render={(props) => <SingleItem {...props} />} />
            <Route path="/shop" render={(props) => <ShopList items={items} {...props} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Shop;

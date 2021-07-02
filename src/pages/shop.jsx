import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import ShopList from '../components/shopList';
import SingleItem from '../components/shopSingleItem';
import SocialIcons from '../components/socialIcons';

class Shop extends Component {
  render() {
    const { shopCategories, items } = this.props.shop;
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
          <SocialIcons shop={this.props.shop} />
        </aside>
        <main>
          <Switch>
            <Route path="/shop/item/1" render={(props) => <SingleItem shop={this.props.shop} {...props} />} />
            <Route path="/shop" render={(props) => <ShopList items={items} {...props} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Shop;

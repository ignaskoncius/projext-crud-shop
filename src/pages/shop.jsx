import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import ShopList from '../components/shopList';
import SingleItem from '../components/shopSingleItem';
import SocialIcons from '../components/common/socialIcons';
import Cart from '../components/cart/cart';

class Shop extends Component {
  render() {
    const { shopCategories, items, socialLinksData } = this.props.shop;
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
          <SocialIcons socialLinksData={socialLinksData} />
        </aside>
        <main>
          <Switch>
            <Route
              path="/shop/item/:id"
              render={(props) => (
                <SingleItem
                  items={items}
                  // item={items.find((i) => i._id === props.match.params.id)}
                  socialLinksData={socialLinksData}
                  {...props}
                />
              )}
            />
            <Route path="/shop/cart" render={(props) => <Cart items={{}} {...props} />} />
            <Route path="/shop" render={(props) => <ShopList items={items} {...props} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Shop;

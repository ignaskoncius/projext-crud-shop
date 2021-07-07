import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import ShopList from '../components/shopList';
import SingleItem from '../components/shopSingleItem';
import SocialIcons from '../components/common/socialIcons';
import Cart from '../components/cart/cart';

class Shop extends Component {
  render() {
    const { shopCategories, items, socialLinksData, cart } = this.props.shop;
    return (
      <div className="shop-page">
        <div className="shop-search-cart d-flex space-between mb-1">
          <div className="shop-search">
            <i className="fa fa-search"></i>
            <input type="search" placeholder="Search" />
          </div>
          <Link to="/shop/cart" className="shop-cart">
            <i className="fa fa-shopping-cart">Cart</i>
          </Link>
        </div>
        <div className="hr"></div>
        <div className="d-flex">
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
          <main className="shop-items-part">
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
              <Route path="/shop/cart" render={(props) => <Cart cartItems={cart} {...props} />} />
              <Route path="/shop" render={(props) => <ShopList items={items} {...props} />} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default Shop;

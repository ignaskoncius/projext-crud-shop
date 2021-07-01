import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderX from './components/headerX';
import Home from './pages/home';
import Shop from './pages/shop';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
  state = {
    navLinks: [
      { to: '/', title: 'Home' },
      { to: '/shop', title: 'Shop' },
      { to: '/about', title: 'About' },
    ],
    shop: {
      shopCategories: [
        { _id: 1, title: 'Accessories' },
        { _id: 2, title: 'Denim' },
        { _id: 3, title: 'Footwear' },
        { _id: 4, title: 'Jeans' },
        { _id: 5, title: 'T-Shirts' },
      ],
      socialLinks: [
        { to: 'https://www.facebook.com', icon: 'fa fa-facebook' },
        { to: 'https://www.twitter.com', icon: 'fa fa-twitter' },
        { to: 'https://www.instagram.com', icon: 'fa fa-instagram' },
      ],
      items: [
        { _id: 1, title: 'Redneck hat', price: 99.99, image: 'acc_hat_01_', color: 'Green', size: 'L' },
        { _id: 2, title: 'Navy jeans', price: 1099.99, image: 'jack_jeans_01_', color: 'Navy', size: 'M' },
        {
          _id: 3,
          title: 'Granite Oversized T-Shirt',
          price: 369.99,
          image: 'shirt_01_',
          color: 'Washed Black',
          size: 'XL',
        },
      ],
    },
  };
  render() {
    return (
      <div className="App">
        <HeaderX navLinks={this.state.navLinks} />
        <div className="container">
          <Switch>
            {/* kai reikia perduoti props i route mes tai darom su sekancia sintakse */}
            <Route path="/shop" render={(props) => <Shop shop={this.state.shop} {...props} />} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
